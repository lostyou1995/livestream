const express = require("express");

const app = express();
app.set("view engine", 'html');
app.set("views", "./views");
app.get("/", (req, res) =>res.sendFile("views/index.html", {"root": __dirname}));
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);
io.on("connection", function(socket){
    console.log("co nguoi ket noi" + socket.id);
    socket.on("disconnect", function () {
        console.log("ngat ket noi" + socket.id);
    })
});
