const host = 'https://poliserver.duckdns.org:9002';

// Interface for login form
interface Login {
  username: string | undefined;
  password: string | undefined;
}

const dataService = {
  isLogged: function (): boolean {
    const jwt = localStorage.getItem('jwt');
    if (jwt == null) {
      return false;
    }
    const d = new Date();

    try {
      const jwtParse = JSON.parse(atob(jwt.split('.')[1]));

      if (d.getTime() / 1000 > jwtParse.exp) {
        localStorage.removeItem('jwt');
        return false;
      }
      return true;
    } catch (err) {
      console.error(err);

      localStorage.removeItem('jwt');
      return false;
    }
  },

  getRole: function (): boolean {
    if (!this.isLogged()) {
      return false;
    }
    const jwt = localStorage.getItem('jwt') || '';
    const jwtParse = JSON.parse(atob(jwt.split('.')[1]));
    return jwtParse.roles[0];
  },

  getJwt: function (): string | null {
    return localStorage.getItem('jwt');
  },

  setJwt: function (token: string): void {
    localStorage.setItem('jwt', token);
  },

  removeJwt: function (): void {
    localStorage.removeItem('jwt');
  },

  login: async function (v: Login): Promise<boolean> {
    await fetch(host + '/authenticate', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(v),
    })
      .then((data) => data.json())
      .then((data) => this.setJwt(data.token))
      .catch((err) => console.error(err));

    return this.isLogged();
  },

  getHeaders: function (): Headers {
    let headers = new Headers();
    if (this.isLogged()) headers.set('Authorization', 'Bearer ' + this.getJwt());
    return headers;
  },

  getBike: async function () {
    const url = `${host}/v3/alice/config`;

    return fetch(url)
      .then((r) => {
        if (r.status === 200) return r;
        throw new Error('Network response was not ok');
      })
      .then((r) => r.json())
      .then((data) => data)
      .catch((error) => console.error(error));
  },

  getHistory: async function (bike: string, len: number) {
    const url = `${host}/v3/activities/last/${bike}?n=${len}`;

    return fetch(url, { method: 'GET', headers: this.getHeaders() })
      .then((r) => {
        if (r.status === 200) return r;
        throw new Error('Network response was not ok');
      })
      .then((r) => r.json())
      .then((data) => data)
      .catch((error) => console.error(error));
  },

  getConfig: async function () {
    const url = `${host}/v3/alice/config`;

    return fetch(url)
      .then((r) => {
        if (r.status === 200) return r;
        throw new Error('Network response was not ok');
      })
      .then((r) => r.json())
      .then((data) => data)
      .catch((error) => console.error(error));
  },

  // ritorna una lista con l'ultimo dato meteo di ogni stazione
  getWeather: async function () {
    const url = `${host}/v3/weather/last`;

    return fetch(url, { method: 'GET', headers: this.getHeaders() })
      .then((r) => r.json())
      .then((data) => data)
      .catch((error) => console.error(error));
  },

  // ritorna l'ultimo dato meteo di una specifica stazione
  getWeatherSingleStation: async function (id: number) {
    const url = `${host}/v3/weather/last/${id}`;

    return fetch(url, { method: 'GET', headers: this.getHeaders() })
      .then((r) => {
        if (r.status === 200) return r;
        throw new Error('Access denied to weather api');
      })
      .then((r) => r.json())
      .then((data) => data)
      .catch((error) => {});
  },

  getComments: async function () {
    const url = `${host}/v3/alice/comments`;
    return fetch(url)
      .then((comments) => comments.json())
      .then((data) => data)
      .catch((error) => console.error(error));
  },

  getData: async function (bike: string) {
    const url = `${host}/v3/activities/last/${bike}`;

    return fetch(url, { method: 'GET', headers: this.getHeaders() })
      .then((r) => {
        if (r.status === 200) return r;
        throw new Error('Network response was not ok');
      })
      .then((r) => r.json())
      .then((data) => data[0])
      .catch((error) => console.error(error));
  },

  getNotifications: function (counter: number) {
    const url = `${host}/v3/alice/notifications`;

    return fetch(url, {
      method: 'GET',
      headers: this.getHeaders(),
    })
      .then((r) => {
        if (r.status === 200) return r;
        throw new Error('Network response was not ok');
      })
      .then((r) => r.json())
      .then((data) => data.filter((n: any) => n.id >= counter))
      .catch((error) => console.error(error));
  },
};

export default dataService;
