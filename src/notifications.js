import React, { useEffect } from 'react'

import ReactNotification, { store } from 'react-notifications-component'
import { default as api } from 'api'

import 'react-notifications-component/dist/theme.css'
import 'animate.css'

// base note
const base = {
  type: 'info',
  insert: 'top',
  container: 'top-right',
  animationIn: ['animated', 'fadeIn'],
  animationOut: ['animated', 'fadeOut'],
  width: 300,
  dismiss: {
    duration: 2500,
    onScreen: true, // true: mostra il countdown di scomparsa
    pauseOnHover: true,
    showIcon: true,
  },
}

const Notifications = () => {
  let counter = 0

  // 5 secs polling on notifications api
  const notificationsPolling = () => {
    setInterval(async () => {
      let notes = await api.getNotifications(counter)

      // console.log(notes)

      notes.forEach(n => {
        let note = {
          message: n.message,
          type: n.public ? 'info' : 'warning',
          ...base,
        }
        // TODO: Handle private notifications

        store.addNotification(note)

        counter = n.id
      })
    }, 5 * 1000)
  }

  useEffect(() => {
    notificationsPolling()
    // eslint-disable-next-line
  }, [])

  return <ReactNotification />
}

export default Notifications
