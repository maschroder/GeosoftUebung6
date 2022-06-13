// basic version
let http = require('http') // use an existing module from node

let server = http.createServer(handleRequest) // create a server

let host = "localhost" // 127.0.0.1
let port = 1234

server.listen(port, host) // say where the server should listen

// say what the server should do, when it gets an incoming request
function handleRequest (request, res)
{
    console.log(request.url)
   
    if(request.url === "/")
    {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write ("We are on the main page. This is test. This is another test.")
        res.end()

    } else if (request.url === "/index.html")
    {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write ("We are on the index.html page")
        res.end()
    }
    else if  (request.url === "/longerroute/main.html")
    {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write ("We are on the /longerroute/main.html page")
        res.end()
    }
}


console.log(`Server is running on ${host}:${port}`)


// 3 HTML Seiten erstellen, in public Ordner und über Methode aus Beispielcode aufrufen
// .gitignore erstellen und node_modules darin ignorieren