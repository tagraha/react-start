import React from 'react';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import {
  renderToString,
  renderToStaticMarkup,
  renderToNodeStream,
} from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import {
  AsyncComponentProvider,
  createAsyncContext,
} from 'react-async-component';
import { JobProvider, createJobContext } from 'react-jobs';
import bootstrap from 'react-async-bootstrapper';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import config from '../../../config';

import ServerHTML from './ServerHTML';
import DemoApp from '../../../shared/container/DemoApp';
import { log } from '../../../shared/utils/logging';
import configureStore from './../../../shared/redux/configureStore';

/**
 * React application middleware, supports server side rendering.
 */
export default function reactApplicationMiddleware(request, response) {
  // Ensure a nonce has been provided to us.
  // See the server/middleware/security.js for more info.
  if (typeof response.locals.nonce !== 'string') {
    throw new Error('A "nonce" value has not been attached to the response');
  }
  const {
    locals: { nonce },
  } = response;

  // It's possible to disable SSR, which can be useful in development mode.
  // In this case traditional client side only rendering will occur.
  if (config('disableSSR')) {
    if (process.env.BUILD_FLAG_IS_DEV === 'true') {
      // eslint-disable-next-line no-console
      log({
        level: 'info',
        message: `Handling react route without SSR: ${request.url}`,
      });
    }
    // SSR is disabled so we will return an "empty" html page and
    // rely on the client to initialize and render the react application.
    const html = renderToStaticMarkup(<ServerHTML nonce={nonce} />);
    response.status(200).send(`<!DOCTYPE html>${html}`);
    return;
  }

  // Create a context for our AsyncComponentProvider.
  const asyncComponentsContext = createAsyncContext();

  // Create a context for <StaticRouter>, which will allow us to
  // query for the results of the render.
  const reactRouterContext = {};

  // Create the job context for our provider, this grants
  // us the ability to track the resolved jobs to send back to the client.
  const jobContext = createJobContext();

  // Create the redux store.
  const store = configureStore();

  // styled-components => https://www.styled-components.com/docs/advanced#server-side-rendering
  const sheet = new ServerStyleSheet();

  // Declare our React application.
  const app = (
    <AsyncComponentProvider asyncContext={asyncComponentsContext}>
      <JobProvider jobContext={jobContext}>
        <StaticRouter location={request.url} context={reactRouterContext}>
          <Provider store={store}>
            <StyleSheetManager sheet={sheet.instance}>
              <DemoApp />
            </StyleSheetManager>
          </Provider>
        </StaticRouter>
      </JobProvider>
    </AsyncComponentProvider>
  );

  // Pass our app into the react-async-component helper so that any async
  // components are resolved for the render.
  bootstrap(app).then(() => {
    const appString = renderToString(app);

    // Generate the html response.
    const html = renderToNodeStream(
      <ServerHTML
        reactAppString={appString}
        nonce={nonce}
        helmet={Helmet.rewind()}
        storeState={store.getState()}
        routerState={reactRouterContext}
        jobsState={jobContext.getState()}
        asyncComponentsState={asyncComponentsContext.getState()}
      />,
    );

    switch (reactRouterContext.status) {
      case 301:
      case 302:
        // Check if the router context contains a redirect, if so we need to set
        // the specific status and redirect header and end the response.
        response.status(reactRouterContext.status);
        response.location(reactRouterContext.url);
        response.end();
        break;
      case 404:
        // If the renderResult contains a "missed" match then we set a 404 code.
        // Our App component will handle the rendering of an Error404 view.
        response.status(reactRouterContext.status);
        response.type('html');
        response.write('<!doctype html>');
        html.pipe(response);
        break;
      default:
        // Otherwise everything is all good and we send a 200 OK status.
        response.status(200);
        response.type('html');
        response.setHeader('Cache-Control', 'no-cache');
        response.write('<!doctype html>');
        html.pipe(response);
    }
  });
}
