import openSocket from "socket.io-client";

let socket;

var SocketIoHelper = {
  setup: function() {
    //SOLO PER LO SVILUPPO
    let port;
    if (window.location.port === "3000") {
      port = "5000";
    } else {
      port = window.location.port;
    }

    socket = openSocket("http://" + document.domain + ":" + port);

    // connessione
    socket.on("connection", () => {
      //alert(msg);
    });
  },

  giveData: function(data) {
    socket.emit("give_json", data);
  },

  // pacchetti tipo 0
  /*
   * Servono due funzioni poiche' i dati
   * vengono richiesti dentro un setTimeout
   */
  getData: function(cb) {
    socket.on("data_response", data => cb(JSON.parse(data)));
  },

  requestData: function() {
    socket.emit("data_request");
  },

  // pacchetti tipo 1
  getSettings: function(cb) {
    socket.emit("settings_request");
    socket.on("settings_response",
      settings => cb(JSON.parse(settings)));
  },
};

export default SocketIoHelper;