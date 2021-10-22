import { getAuthToken } from 'firebase';

const host = 'https://serverino.policumbent.it:9002';

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
    const username = v.username || '';
    const password = v.password || '';

    try {
      const token = await getAuthToken(username, password);

      this.setJwt(token);
    } catch (err) {
      console.error(err);
    }

    return this.isLogged();
  },

  getHeaders: function (): Headers {
    const headers = new Headers();
    if (this.isLogged()) {
      headers.set('Authorization', 'Bearer ' + this.getJwt());
    }
    return headers;
  },

  getHistory: async function (bike: string, len: number) {
    const url = `${host}/api/activities/last/${bike}/${len}`;

    return fetch(url, { method: 'GET', headers: this.getHeaders() })
      .then((r) => {
        if (r.ok) return r;
        throw new Error('Network response was not ok');
      })
      .then((r) => r.json())
      .then((data) => data)
      .catch((error) => console.error(error));
  },

  getConfig: async function () {
    const url = `${host}/api/alice/config`;

    return fetch(url)
      .then((r) => {
        if (r.ok) return r;
        throw new Error('Network response was not ok');
      })
      .then((r) => r.json())
      .then((data) => data)
      .catch((error) => console.error(error));
  },

  // ritorna una lista con l'ultimo dato meteo di ogni stazione
  getWeather: async function () {
    const url = `${host}/api/weather/last`;

    return fetch(url, { method: 'GET', headers: this.getHeaders() })
      .then((r) => r.json())
      .then((data) => data)
      .catch((error) => console.error(error));
  },

  // ritorna l'ultimo dato meteo di una specifica stazione
  getWeatherSingleStation: async function (id: string) {
    const url = `${host}/api/weather/last/${id}`;

    return fetch(url, { method: 'GET', headers: this.getHeaders() })
      .then((r) => {
        if (r.ok) return r;
        throw new Error('Access denied to weather api');
      })
      .then((r) => r.json())
      .then((data) => data)
      .catch((error) => console.error(error));
  },

  getComments: async function () {
    const url = `${host}/api/alice/comments`;
    return fetch(url)
      .then((comments) => comments.json())
      .then((data) => data)
      .catch((error) => console.error(error));
  },

  getData: async function (bike: string) {
    const url = `${host}/api/activities/last/${bike}`;

    return fetch(url, { method: 'GET', headers: this.getHeaders() })
      .then((r) => {
        if (r.ok) return r;
        throw new Error('Network response was not ok');
      })
      .then((r) => r.json())
      .then((data) => data)
      .catch((error) => console.error(error));
  },

  getNotifications: async function (counter: number) {
    const url = `${host}/api/alice/notifications`;

    return fetch(url, {
      method: 'GET',
      headers: this.getHeaders(),
    })
      .then((r) => {
        if (r.ok) return r;
        throw new Error('Network response was not ok');
      })
      .then((r) => r.json())
      .then((data) => data.filter((n: any) => n.id > counter))
      .catch((error) => console.error(error));
  },

  /**
   * Put a token on firebase db
   *
   * @param token -> generated firebase token
   *
   */
  sendNotificationsToken: async function (token: string) {
    const url = `${host}/api/alice/tokens`;

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error(error);
    }
  },
};

export default dataService;
