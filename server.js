let http = require('http') // use an existing module from node
let server = http.createServer(handleRequest) // create a server
server.listen(3000) // say where the server should listen
// say what the server should do, when it gets an incoming request
function handleRequest (request, response)
{
 console.log(request)
 console.log(response)
}

// einfacher Kommentar