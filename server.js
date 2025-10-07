import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({ static: "./" }); 
const PORT = process.env.PORT || 10000;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`✅ Fake API running on port ${PORT}`);
});
