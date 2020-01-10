import openSocket from 'socket.io-client'

let socket

const SocketIoHelper = {
  setup: function() {
    let port
    if (window.location.port === '3000') {
      port = '5000'
    } else {
      port = window.location.port
    }
    socket = openSocket('http://' + document.domain + ':' + port)

    // connessione
    socket.on('connection', () => {
      //alert(msg);
    })
  },
  // funzione template
  giveData: function(data) {
    socket.emit('give_json', data)
  },

  getHistory: function(cb) {
    socket.emit('history_request')
    socket.on('history_response', history => cb(history))
  },

  getWeather: function(cb) {
    socket.on('weather_response', weather => cb(JSON.parse(weather)))
  },

  // pacchetti tipo 0
  /*
   * Servono due funzioni poiche' i dati
   * vengono richiesti dentro un setTimeout
   */
  getData: function(cb) {
    socket.on('data_response', data => cb(JSON.parse(data)))
  },

  requestData: function() {
    socket.emit('data_request')
  },

  // pacchetto tipo 1
  getState: function(cb) {
    socket.emit('state_request')
    socket.on('state_response', state => cb(JSON.parse(state)))
  },

  // pacchetti tipo 3
  getSettings: function(cb) {
    socket.emit('settings_request')
    socket.on('settings_response', settings => cb(JSON.parse(settings)))
  },

  saveSettings: function(sett) {
    socket.emit('save_setting', sett)
  },

  // pacchetto tipo 6
  sendRasp: function(rasp_value) {
    socket.emit('send_rasp', rasp_value)
  },

  // pacchetto tipo 7
  sendVideo: function(video) {
    socket.emit('send_video', video)
  },

  // NOTE: Il cambio va bene con l'app bluetooth android
  // pacchetto tipo 8
  // sendCalibration: function (calibration) {
  //   socket.emit("send_calibration", calibration);
  // }
}

export default SocketIoHelper
