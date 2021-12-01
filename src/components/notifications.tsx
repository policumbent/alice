import RN, { ReactNotificationOptions, store } from 'react-notifications-component';
// import { onMessageListener } from 'firebase';

// This is a workaround for a rollup bug: https://github.com/vitejs/vite/issues/2139#issuecomment-854960323
export const ReactNotification = interopDefault(RN);

function interopDefault<T>(value: T): T {
  return (value as any).default;
}

type Note = ReactNotificationOptions;

// base note
const base: Note = {
  insert: 'top',
  container: 'top-right',
  animationIn: ['animated', 'fadeIn'],
  animationOut: ['animated', 'fadeOut'],
  width: 300,
  dismiss: {
    duration: 10000,
    onScreen: true, // mostra il countdown di scomparsa
    pauseOnHover: true,
    showIcon: true,
  },
};

export const infoNotification = (title: string, message: string) => {
  const note: Note = { message, title, type: 'info', ...base };
  store.addNotification(note);
};

export const connectedNote = () => {
  const note: Note = { message: 'Bike is connected', type: 'success', ...base };
  store.addNotification(note);
};

export const disconnectedNote = () => {
  const note: Note = { message: 'Bike is not connected', type: 'danger', ...base };
  store.addNotification(note);
};

const Notifications = () => {
  // /* When the app is open receive a toast notification */
  // onMessageListener()
  //   .then((payload: any) => {
  //     const title = payload.notification?.title;
  //     const body = payload.notification?.body;

  //     infoNotification(title, body);
  //   })
  //   .catch((err) => console.log('failed: ', err));

  return <ReactNotification />;
};

export default Notifications;
