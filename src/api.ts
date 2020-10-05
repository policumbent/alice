// const poliServer = 'https://poliserverbeta.duckdns.org:9002'
const host = 'http://localhost:8080'
const username = process.env.REACT_APP_USER
const password = process.env.REACT_APP_PASS

const dataService = {
  isLogged: function (): boolean {
    const jwt = localStorage.getItem('jwt')
    if (jwt == null) {
      return false
    }
    const d = new Date()
    const jwtParse = JSON.parse(atob(jwt.split('.')[1]))
    if (d.getTime() / 1000 > jwtParse.exp) {
      localStorage.removeItem('jwt')
      return false
    }
    return true
  },

  getRole: function (): boolean {
    if (!this.isLogged()) {
      return false
    }
    const jwt = localStorage.getItem('jwt') || ""
    const jwtParse = JSON.parse(atob(jwt.split('.')[1]))
    return jwtParse.roles[0]
  },

  getJwt: function (): string | null {
    return localStorage.getItem('jwt')
  },

  setJwt: function (token: string): void {
    localStorage.setItem('jwt', token)
  },

  removeJwt: function (): void {
    localStorage.removeItem('jwt')
  },

  login: function (username: string, password: string): void {
    const v = { username, password }
    fetch(host + '/authenticate', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(v),
    })
      .then(data => console.log(data))
      .catch(err => console.log(err))
  },

  getHeaders: function (): Headers {
    let headers = new Headers()
    if (dataService.isLogged())
      headers.set('Authorization', 'Bearer ' + dataService.getJwt())
    return headers
  },

  getHistory: function (cb: any, bike: string) {
    const url = `${host}/v3/activities/last/${bike}?n=60`

    fetch(url, { method: 'GET', headers: dataService.getHeaders() })
      .then(r => r.json())
      .then(data => cb(data))
      .catch(error => console.log(error))
  },
  getConfig: function (cb: any) {
    const url = `${host}/v3/alice/config`

    fetch(url)
      .then(r => r.json())
      .then(data => cb(data))
      .catch(error => console.log(error))
  },

  // ritorna una lista con l'ultimo dato meteo di ogni stazione
  getWeather: function (cb: any) {
    // socket.on('weather_response', weather => cb(JSON.parse(weather)))
    const url = `${host}/v3/weather/last`
    fetch(url, { method: 'GET', headers: dataService.getHeaders() })
      .then(r => r.json())
      .then(data => cb(data))
      .catch(error => console.log(error))
  }, // ritorna una lista con l'ultimo dato meteo di ogni stazione

  // ritorna l'ultimo dato meteo di una specifica stazione
  getWeatherSingleStation: function (cb: any, id: number) {
    // socket.on('weather_response', weather => cb(JSON.parse(weather)))
    const url = `${host}/v3/weather/last/${id}`
    fetch(url, { method: 'GET', headers: dataService.getHeaders() })
      .then(r => r.json())
      .then(data => cb(data))
      .catch(error => console.log(error))
  },

  getComments: function (cb: any) {
    // // todo: da fare lato server
    // const url = poliServer + '/alice/comments'
    // fetch(url)
    //   .then(comments => comments.json())
    //   .then(data => cb(data))
    //   .catch(error => console.log(error))
  },

  getData: function (cb: any, bike: string) {
    const url = `${host}/v3/activities/last/${bike}`
    fetch(url, { method: 'GET', headers: dataService.getHeaders() })
      .then(r => r.json())
      .then(data => cb(data[0]))
      .catch(error => console.log(error))
  },

}

export default dataService
