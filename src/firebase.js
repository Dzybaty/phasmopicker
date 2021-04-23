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
};

firebase.initializeApp(config);

if (!isDevEnv()) {
  firebase.analytics();
}

// eslint-disable-next-line import/prefer-default-export
export const firebaseDB = firebase.database();
