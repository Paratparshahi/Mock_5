const Jsonserver= require('json-server');
const server = Jsonserver.create();
const router = Jsonserver.router('db.json');
const middleware=Jsonserver.defaults();
const port= process.env.PORT||3004;

server.use(middleware);
server.use(router);
server.listen(port)
