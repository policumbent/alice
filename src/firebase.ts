import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, getIdToken } from 'firebase/auth';
import { getMessaging, getToken } from 'firebase/messaging';
import { default as api } from './api';
import Store from './utils/store';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(config);

export const getAuthToken = async (username: string, password: string) => {
  const auth = getAuth(app);
  const response = await signInWithEmailAndPassword(auth, username, password);
  return await getIdToken(response.user);
};

export const getMessageToken = async () => {
  try {
    const messaging = getMessaging(app);
    const swRegistration = await navigator.serviceWorker.ready;
    const currentToken = await getToken(messaging, {
      serviceWorkerRegistration: swRegistration,
    });

    if (currentToken) {
      api.sendNotificationsToken(currentToken);
      Store.set('notifications', currentToken);
      console.log('Registration token is ok');
    } else {
      console.log('No registration token available. Request permission to generate one.');
    }
  } catch (e) {
    console.log('An error occurred while retrieving token. ', e);
  }
};

// export const onMessageListener = () =>
//   new Promise((resolve) => {
//     const messaging = getMessaging(app);

//     onMessage(messaging, (payload) => {
//       resolve(payload);
//     });
//   });
