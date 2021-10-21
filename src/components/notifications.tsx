// import { useEffect, useRef } from 'react';

// import ReactNotification, { ReactNotificationOptions, store } from 'react-notifications-component';
import ReactNotification from 'react-notifications-component';
// import { default as api } from 'api';

import 'react-notifications-component/dist/theme.css';
import 'animate.css';

const Notifications = () => {
  // const counter = useRef(0);

  // 5 secs polling on notifications api
  //
  // eslint-disable-next-line
  // const notificationsPolling = () => {
  //   setInterval(async () => {
  //     const notes = await api.getNotifications(counter.current);

  //     notes.forEach((n: any) => {
  //       const note: Note = {
  //         message: n.message,
  //         type: n.public ? 'info' : 'warning',
  //         ...base,
  //       };

  //       // @todo Handle private notifications

  //       store.addNotification(note);

  //       counter.current = n.id;
  //     });
  //   }, 5 * 1000);
  // };

  // useEffect(() => {
  //   notificationsPolling();
  // }, []);

  return <ReactNotification />;
};

export default Notifications;
