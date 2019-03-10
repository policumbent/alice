import openSocket from "socket.io-client";

let socket;

var SocketIoHelper = {
  setup: function() {
    socket = openSocket("http://localhost:8080");

    //avvenuta connessione
    socket.on("my response", function(msg) {
      //alert(msg);
    });
  },
  getData: function(cb) {
    socket.on("json response", data => cb(data));
  },

  requestData: function() {
    socket.emit("json request");
  }
};

export default SocketIoHelper;
