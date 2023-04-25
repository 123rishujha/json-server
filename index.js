// server.js
const jsonServer = require('json-server')
const path = require('path');
const cors = require("cors");

//creating
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()


server.use(cors());
server.use(middlewares)
server.use(router)


//connecting
server.listen(3000, () => {
  console.log('JSON Server is running')
})