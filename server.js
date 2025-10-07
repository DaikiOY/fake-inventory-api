const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults({ static: "./" });

const PORT = process.env.PORT || 10000;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`✅ Fake Inventory API running on port ${PORT}`);
});
