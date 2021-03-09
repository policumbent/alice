// const poliServer = 'https://poliserverbeta.duckdns.org:9002'
const host = 'https://poliserver.duckdns.org:9002'
// const username = process.env.REACT_APP_USER
// const password = process.env.REACT_APP_PASS

const dataService = {
  isLogged: function(): boolean {
    const jwt = localStorage.getItem('jwt')
    if (jwt == null) {
      return false
    }
    const d = new Date()

    try {
      const jwtParse = JSON.parse(atob(jwt.split('.')[1]))

      if (d.getTime() / 1000 > jwtParse.exp) {
        localStorage.removeItem('jwt')
        return false
      }
      return true
    } catch (error) {
      console.log(error)

      localStorage.removeItem('jwt')
      return false
    }
  },

  getRole: function(): boolean {
    if (!this.isLogged()) {
      return false
    }
    const jwt = localStorage.getItem('jwt') || ''
    const jwtParse = JSON.parse(atob(jwt.split('.')[1]))
    return jwtParse.roles[0]
  },

  getJwt: function(): string | null {
    return localStorage.getItem('jwt')
  },

  setJwt: function(token: string): void {
    localStorage.setItem('jwt', token)
  },

  removeJwt: function(): void {
    localStorage.removeItem('jwt')
  },

  login: function(username: string, password: string): void {
    const v = { username, password }
    // console.log(v)

    fetch(host + '/authenticate', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(v),
    })
      .then(data => data.json())
      .then(data => this.setJwt(data.token))
      .catch(err => console.log(err))
  },

  getHeaders: function(): Headers {
    let headers = new Headers()
    if (dataService.isLogged())
      headers.set('Authorization', 'Bearer ' + dataService.getJwt())
    return headers
  },

  getBike: async function() {
    const url = `${host}/v3/alice/config`

    return await fetch(url)
      .then(r => {
        if (r.status === 200) return r
        throw new Error('Network response was not ok')
      })
      .then(r => r.json())
      .then(data => {
        return data
      })
      .catch(error => console.log(error))
  },

  getHistory: function(cb: any, bike: string) {
    const url = `${host}/v3/activities/last/${bike}?n=60`

    fetch(url, { method: 'GET', headers: dataService.getHeaders() })
      .then(r => {
        if (r.status === 200) return r
        throw new Error('Network response was not ok')
      })
      .then(r => r.json())
      .then(data => cb(data))
      .catch(error => console.log(error))
  },

  getConfig: function(cb: any) {
    const url = `${host}/v3/alice/config`

    fetch(url)
      .then(r => {
        if (r.status === 200) return r
        throw new Error('Network response was not ok')
      })
      .then(r => r.json())
      .then(data => cb(data))
      .catch(error => console.log(error))
  },

  // ritorna una lista con l'ultimo dato meteo di ogni stazione
  getWeather: function(cb: any) {
    const url = `${host}/v3/weather/last`
    fetch(url, { method: 'GET', headers: dataService.getHeaders() })
      .then(r => r.json())
      .then(data => cb(data))
      .catch(error => console.log(error))
  },

  // ritorna l'ultimo dato meteo di una specifica stazione
  getWeatherSingleStation: function(cb: any, id: number) {
    const url = `${host}/v3/weather/last/${id}`
    fetch(url, { method: 'GET', headers: dataService.getHeaders() })
      .then(r => {
        if (r.status === 200) return r
        throw new Error('Network response was not ok')
      })
      .then(r => r.json())
      .then(data => cb(data))
      .catch(error => console.log(error))
  },

  getComments: function(cb: any) {
    const url = `${host}/v3/alice/comments`
    fetch(url)
      .then(comments => comments.json())
      .then(data => cb(data))
      .catch(error => console.log(error))
  },

  getData: function(cb: any, bike: string) {
    const url = `${host}/v3/activities/last/${bike}`
    fetch(url, { method: 'GET', headers: dataService.getHeaders() })
      .then(r => {
        if (r.status === 200) return r
        throw new Error('Network response was not ok')
      })
      .then(r => r.json())
      .then(data => cb(data[0]))
      .catch(error => console.log(error))
  },

  getNotifications: function(counter: number) {
    const url = `${host}/v3/alice/notifications`

    return fetch(url, {
      method: 'GET',
      headers: dataService.getHeaders(),
    })
      .then(r => {
        if (r.status === 200) return r
        throw new Error('Network response was not ok')
      })
      .then(r => r.json())
      .then(data => data.filter((n: any) => n.id >= counter))
      .catch(error => console.log(error))
  },
}

export default dataService
