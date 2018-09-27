/* eslint-disable global-require */

import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import bootstrap from 'react-async-bootstrapper';
import { AppContainer as ReactHotLoader } from 'react-hot-loader';
import { AsyncComponentProvider } from 'react-async-component';
import { JobProvider } from 'react-jobs';
import configureStore from './../shared/redux/configureStore';

import './polyfills';

import DemoApp from '../shared/container/DemoApp';

// Get the DOM Element that will host our React application.
const container = document.querySelector('#app');

// Create our Redux store.
const store = configureStore(
  // Server side rendering would have mounted our state on this global.
  window.__APP_STATE__, // eslint-disable-line no-underscore-dangle
);

// Does the user's browser support the HTML5 history API?
// If the user's browser doesn't support the HTML5 history API then we
// will force full page refreshes on each page change.
const supportsHistory = 'pushState' in window.history;

// Get any rehydrateState for the async components.
const asyncComponentsRehydrateState =
  window.__ASYNC_COMPONENTS_REHYDRATE_STATE__;

// Grab the state from a global variable injected into the server-generated HTML
// const preloadedState = window.__initialData__;

// Get any "rehydrate" state sent back by the server
// eslint-disable-next-line no-underscore-dangle
const rehydrateState = window.__JOBS_STATE__;

// Allow the passed state to be garbage-collected
delete window.__initialData__;
delete window.__ASYNC_COMPONENTS_REHYDRATE_STATE__;

/**
 * Renders the given React Application component.
 */
function renderApp(TheApp) {
  // Firstly, define our full application component, wrapping the given
  // component app with a browser based version of react router.
  const app = (
    <ReactHotLoader>
      <AsyncComponentProvider rehydrateState={asyncComponentsRehydrateState}>
        <JobProvider rehydrateState={rehydrateState}>
          <Provider store={store}>
            <BrowserRouter forceRefresh={!supportsHistory}>
              <TheApp />
            </BrowserRouter>
          </Provider>
        </JobProvider>
      </AsyncComponentProvider>
    </ReactHotLoader>
  );

  // We use the react-async-component in order to support code splitting of
  // our bundle output. It's important to use this helper.
  // @see https://github.com/ctrlplusb/react-async-component
  bootstrap(app).then(() => hydrate(app, container));
}

// Execute the first render of our app.
renderApp(DemoApp);

// This registers our service worker for asset caching and offline support.
// Keep this as the last item, just in case the code execution failed (thanks
// to react-boilerplate for that tip.)
require('./registerServiceWorker');

// The following is needed so that we can support hot reloading our application.
if (process.env.BUILD_FLAG_IS_DEV === 'true' && module.hot) {
  // Accept changes to this file for hot reloading.
  module.hot.accept('./index.js');
  // Any changes to our App will cause a hotload re-render.
  module.hot.accept('../shared/container/DemoApp', () => {
    renderApp(require('../shared/container/DemoApp').default);
  });
}
