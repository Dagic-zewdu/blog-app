const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json")
const port = process.env.PORT || 5000;

server.use("/api",router);
const middlewares = jsonServer.defaults({
    static:"dist"
});
server.use(middlewares);

server.listen(port);