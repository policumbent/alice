// import openSocket from 'socket.io-client'

// let socket
// let history = [{"heartrate": 10, "power": 100}, {"heartrate": 100, "power": 120}];

const APIfetcher = {
  setup: function() {
    // socket = openSocket(window.location.origin)
    //
    // // connessione
    // socket.on('connection', () => {
    //   //alert(msg);
    // })
  },
  // funzione template
  giveData: function(data) {
    // socket.emit('give_json', data)
  },

  getHistory: function(cb) {
    cb([])
    // let base64 = require('base-64');
    // let url = 'https://poliserver.duckdns.org/live/private?bike=' + "taurus";
    // let username = 'ste';
    // let password = 'ciaociao';
    // let headers = new Headers();
    // headers.set('Authorization', 'Basic ' + base64.encode(username + ":" + password));
    //
    // // todo: ajax request /live
    // fetch(url, {method:'GET', headers: headers, })
    //   .then(r =>  r.json().then(data => cb([data, data])))
    //   .catch(error => console.log(error))
  },

  getWeather: function(cb) {
    // socket.on('weather_response', weather => cb(JSON.parse(weather)))
  },

  // pacchetti tipo 0
  /*
   * Servono due funzioni poiche' i dati
   * vengono richiesti dentro un setTimeout
   */
  // getData: function(cb) {
  //   // todo: riposta della richiesta ajax
  //   // cb(JSON.parse(data))
  //   // socket.on('data_response', data => cb(JSON.parse(data)))
  // },
  getComments: cb => {
    // const url = 'https://poliserver.duckdns.org/alice/comments/'
    const url = 'https://poliserver.duckdns.org:9002/alice/comments/'

    fetch(url)
      .then(comments => comments.json())
      .then(data => cb(data))
      .catch(error => console.log(error))
  },
  getData: function(cb, bike) {
    // let username = 'ste';
    // let password = 'ciaociao';
    let base64 = require('base-64')
    let url = 'https://poliserver.duckdns.org/live?bike=' + bike
    // let headers = new Headers()
    // headers.set(
    //   'Authorization',
    //   'Basic ' + base64.encode(username + ':' + password)
    // )

    // todo: ajax request /live
    // fetch(url, { method: 'GET', headers: headers })
    fetch(url, { method: 'GET' })
      .then(r => r.json().then(data => cb(data)))
      .catch(error => console.log(error))
  },

  // pacchetto tipo 1
  getState: function(cb) {
    // socket.emit('state_request')
    // socket.on('state_response', state => cb(JSON.parse(state)))
  },

  // pacchetti tipo 3
  getSettings: function(cb) {
    // socket.emit('settings_request')
    // socket.on('settings_response', settings => cb(JSON.parse(settings)))
  },

  saveSettings: function(sett) {
    // socket.emit('save_setting', sett)
  },

  // pacchetto tipo 6
  sendRasp: function(rasp_value) {
    // socket.emit('send_rasp', rasp_value)
  },

  // pacchetto tipo 7
  sendVideo: function(video) {
    // socket.emit('send_video', video)
  },

  // NOTE: Il cambio va bene con l'app bluetooth android
  // pacchetto tipo 8
  // sendCalibration: function (calibration) {
  //   socket.emit("send_calibration", calibration);
  // }
}

export default APIfetcher
