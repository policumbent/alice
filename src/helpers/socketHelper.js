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
  getData: function(cb) {
    socket.on("data response", data => cb(JSON.parse(data)));
  },

  requestData: function() {
    socket.emit("data request");
  },

  giveData: function(data) {
    socket.emit("give json", data);
  },

  requestSettings: function() {
    socket.emit("settings request");
  },

  getSettings: function(cb) {
    socket.on("settings response",
      settings => cb(JSON.parse(settings)));
  },
};

export default SocketIoHelper;