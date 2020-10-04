// const poliServer = 'https://poliserverbeta.duckdns.org:9002'
const host = 'http://localhost:8080'
const username = process.env.REACT_APP_USER
const password = process.env.REACT_APP_PASS

const dataService = {
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

  isLogged: function(): boolean{
    const jwt = localStorage.getItem('jwt');
    if (jwt == null){
      return false;
    }
    const d = new Date();
    const jwtParse = JSON.parse(atob(jwt.split('.')[1]));
    if (d.getTime() / 1000 > jwtParse.exp){
      localStorage.removeItem('jwt');
      return false;
    }
    return true;
  },

  getRole: function(): boolean{
    if (!this.isLogged()) {
      return '';
    }
    const jwt = localStorage.getItem('jwt');
    const jwtParse = JSON.parse(atob(jwt.split('.')[1]));
    return jwtParse.roles[0];
  },

  getJwt: function(): string{
    return localStorage.getItem('jwt');
  },


  setJwt: function(token: string): void{
    localStorage.setItem('jwt', token);
  },

  removeJwt: function(): void{
    localStorage.removeItem('jwt');
  },

  login: function(username: string, password: string): void{
    const v = { username, password};
    fetch(host + '/authenticate',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(v)
    })
      .then(data => console.log(data))
      .catch(err => console.log(err))
  },

  getHeaders: function(): Headers{
    let headers = new Headers()
    if (dataService.isLogged())
      headers.set('Authorization', 'Bearer ' + dataService.getJwt())
    return headers;
  },

  getHistory: function(cb, bike: string) {
    const url = `${host}/v3/activities/last/${bike}?n=60`;

    fetch(url, { method: 'GET', headers: dataService.getHeaders() })
      .then(r => r.json())
      .then(data => cb(data))
      .catch(error => console.log(error))
  },
  getConfig: function(cb) {
    const url = `${host}/v3/alice/config`;

    fetch(url)
      .then(r => r.json())
      .then(data => cb(data))
      .catch(error => console.log(error))
  },

  // ritorna una lista con l'ultimo dato meteo di ogni stazione
  getWeather: function(cb) {
    // socket.on('weather_response', weather => cb(JSON.parse(weather)))
    const url = `${host}/v3/weather/last`;
    fetch(url, { method: 'GET', headers: dataService.getHeaders() })
      .then(r => r.json())
      .then(data => cb(data))
      .catch(error => console.log(error))
  },  // ritorna una lista con l'ultimo dato meteo di ogni stazione

  // ritorna l'ultimo dato meteo di una specifica stazione
  getWeatherSingleStation: function(cb, id: number) {
    // socket.on('weather_response', weather => cb(JSON.parse(weather)))
    const url = `${host}/v3/weather/last/${id}`;
    fetch(url, { method: 'GET', headers: dataService.getHeaders() })
      .then(r => r.json())
      .then(data => cb(data))
      .catch(error => console.log(error))
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
    // // todo: da fare lato server
    // const url = poliServer + '/alice/comments'
    // fetch(url)
    //   .then(comments => comments.json())
    //   .then(data => cb(data))
    //   .catch(error => console.log(error))
  },
  getData: function(cb, bike) {
    const url = `${host}/v3/activities/last/${bike}`;
    fetch(url, { method: 'GET', headers: dataService.getHeaders() })
      .then(r => r.json())
      .then(data => cb(data))
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

export default dataService
