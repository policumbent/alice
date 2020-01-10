import 'react-notifications-component/dist/theme.css'
import 'animate.css'

// Notifiche
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

export default base
