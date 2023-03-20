const jsonServer=require("json-server")

let server=jsonServer.create()

let router=jsonServer.router("db.json")

let middlewares=jsonServer.defaults()

port=process.env.port || 3001

server.use(middlewares)
server.use(router)
server.listen(port)