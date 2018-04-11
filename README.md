[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![Build Status](https://travis-ci.org/tagraha/react-start.svg?branch=master)](https://travis-ci.org/tagraha/react-start)
[![CircleCI](https://circleci.com/gh/tagraha/react-start.svg?style=svg)](https://circleci.com/gh/tagraha/react-start)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

<a 
target="_blank"
href="https://david-dm.org/tagraha/react-start">
  <img src="https://david-dm.org/tagraha/react-start.svg" alt="Dependency Status" />
</a>
<a 
target="_blank"
href="https://david-dm.org/tagraha/react-start?type=dev">
  <img src="https://david-dm.org/tagraha/react-start/dev-status.svg" alt="Dev Dependency Status" />
</a>

Heavily modification of react-universaly
----------------------------------------
React boilerplate with code spliting, asynchronous data fetching (universal/isomorphic rendering)

Installation
------------
```bash
git clone git@github.com:tagraha/react-start.git
cd react-start
npm install
```

at this point make `.env` file on your root directory. you can copy it from `.env_example` file.

```bash
npm run develop
```

open up your browser and navigate to `localhost:1337`

Production script command
-------------------------
```bash
npm run build
npm start
```

-------------

The App
-------
Navigate to `shared/container/DemoApp` and start exploring the code

Configuration
-------------
you can configure like disabling SSR mode, renaming service worker file etc with `value.js` file. here's the the quick look of the file

```javascript

const values = {
  clientConfigFilter: {
    // This is here as an example showing that you can expose variables
    // that were potentially provivded by the environment
    welcomeMessage: true,
    // We only need to expose the enabled flag of the service worker.
    serviceWorker: {
      enabled: true,
    },
    // We need to expose all the polyfill.io settings.
    polyfillIO: true,
    // We need to expose all the htmlPage settings.
    htmlPage: true,
  },

  // The host on which the server should run.
  host: EnvVars.string('HOST', 'localhost'),

  // The port on which the server should run.
  port: EnvVars.number('PORT', 1337),

  // The port on which the client bundle development server should run.
  clientDevServerPort: EnvVars.number('CLIENT_DEV_PORT', 7331),
  welcomeMessage: EnvVars.string('WELCOME_MSG', 'Hello world!'),

  // Disable server side rendering?
  disableSSR: false,
  browserCacheMaxAge: '365d',
}
```

TODOS
-----
- [x] attach redux
- [x] make it async data fetch
- [x] upgrade to webpack 4 (perks)
- [x] unit testing
- [ ] flowjs type checker
- [ ] redux-saga over redux-thunk?


## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/3034375?v=4" width="100px;"/><br /><sub><b>Tirta Nugraha</b></sub>](http://www.betotally.com/)<br />[💻](https://github.com/tagraha/react-start/commits?author=tagraha "Code") [📖](https://github.com/tagraha/react-start/commits?author=tagraha "Documentation") [🔌](#plugin-tagraha "Plugin/utility libraries") [👀](#review-tagraha "Reviewed Pull Requests") [⚠️](https://github.com/tagraha/react-start/commits?author=tagraha "Tests") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
