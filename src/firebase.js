import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/analytics';

import { isDevEnv } from './utils';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_API_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSANGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(config);

// eslint-disable-next-line import/no-mutable-exports
let analytics;

if (isDevEnv()) {
  analytics = {
    // eslint-disable-next-line no-console
    logEvent: (eventName, options) => console.log('Mocked analytics request:', eventName, options),
  };
} else {
  analytics = firebase.analytics();
}

export const firebaseDB = firebase.database();
export { analytics };
