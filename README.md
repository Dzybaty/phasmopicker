[![Unit Test CI](https://github.com/Dzybaty/phasmopicker/actions/workflows/ci_test.yml/badge.svg)](https://github.com/Dzybaty/phasmopicker/actions/workflows/ci_test.yml)
[![Build and Deploy](https://github.com/Dzybaty/phasmopicker/actions/workflows/build_and_deploy.yml/badge.svg)](https://github.com/Dzybaty/phasmopicker/actions/workflows/build_and_deploy.yml)

Phasmopicker Mission Planner is a web application which helps with preparation, tracking and successfull mission completion in [Phasmophobia](https://store.steampowered.com/app/739630/Phasmophobia/) game.

_The application is not supported by the developers of Phasmophobia in any way._

## Features
- Filtering ghosts by evidence (both include and exclude options are supported)
- Pre-mission fields to fill like Ghost Name, shyness and quests.
- List of questions for the ghost to ask
- Session-based rooms with realtime information synchronization between users
- Support of localization (EN and RU are currently supported)
- Responsive mobile-friendly interface

## Under the hood

#### ReactJS
Application is written using [ReactJS](https://reactjs.org/) and [Redux](https://react-redux.js.org/) + [Redux Saga](https://redux-saga.js.org/) for store management.

#### Firebase
For data storage and synchronization [Firebase Realtime Database](https://firebase.google.com/docs/database) is used.

[Firebase Analytics](https://firebase.google.com/docs/analytics) is also used for collecting some analytics data.

#### FormatJS
This app supports internationalization through [FormatJS](https://formatjs.io/). Currently implemented locales are EN and RU.

#### MUI
Application uses awesome library [MUI](https://mui.com/) for bootsrapping interface.

#### GitHub Pages
The frontend part is hosted and served by [GitHub Pages](https://pages.github.com/).

### Available commands
To run application in production mode use ``yarn run``.

To run the app in developement mode use ``yarn start:dev``.

After running the app can be found at [http://localhost:3000/phasmopicker](http://localhost:3000/phasmopicker).

Before pushing don't forget to run ``yarn lint`` and ``yarn test``.

To deploy the app to GitHub Pages use ``yarn deploy``.

### Environment
In order to properly work wih Firebase services and environment configurations you will need to create ``.env`` file with following variables:
```
REACT_APP_FIREBASE_API_KEY
REACT_APP_FIREBASE_API_DOMAIN
REACT_APP_FIREBASE_DB_URL
REACT_APP_FIREBASE_APPID
REACT_APP_FIREBASE_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSANGING_SENDER_ID
REACT_APP_FIREBASE_MEASUREMENT_ID
REACT_APP_ENV
REACT_APP_KEEP_ALIVE_INTERVAL
```

