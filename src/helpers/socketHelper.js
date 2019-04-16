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
  }
};

export default SocketIoHelper;