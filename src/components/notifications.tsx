import { iNotification, ReactNotifications, Store } from 'react-notifications-component';
// import { onMessageListener } from 'firebase';

type Note = iNotification;

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
  Store.addNotification(note);
};

export const connectedNote = () => {
  const note: Note = { message: 'Bike is connected', type: 'success', ...base };
  Store.addNotification(note);
};

export const disconnectedNote = () => {
  const note: Note = { message: 'Bike is not connected', type: 'danger', ...base };
  Store.addNotification(note);
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

  return <ReactNotifications />;
};

export default Notifications;
