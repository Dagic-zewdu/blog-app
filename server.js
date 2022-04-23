const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json")
const middlewares = jsonServer.defaults({
    static:"dist"
});
const port = process.env.PORT || 5000;
const fs=require('fs')
server.use(middlewares);
server.use("/api",router);
server.listen(port);