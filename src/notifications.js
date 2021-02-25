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

  // 3 secs polling on notifications api
  useEffect(() => {
    setInterval(() => {
      notificationsPolling()
    }, 3000)
  }, [])

  const notificationsPolling = async () => {
    let notes = await api.getNotifications(counter)

    console.log(notes)

    notes.forEach(n => {
      if (n.public) {
        store.addNotification({
          message: n.message,
          ...base,
        })
      } else {
        // TODO: Handle private notifications
      }
      counter = n.id
    })
  }

  return <ReactNotification />
}

export default Notifications
