let http = require('http') // use an existing module from node

let host = "localhost" // 127.0.0.1
let port = 5000

let server = http.createServer(handleRequest) // create a server

server.listen(port, host) // say where the server should listen

function handleRequest (request, response)
{
 console.log(request)
 console.log(response)
}
