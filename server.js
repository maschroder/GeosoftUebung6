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
// Code Beispiel express_server.js -> über routen auf die verschiedenen html seiten (html to pug) zugreifen
// Zu jeder Route in der server.js muss eine route.js und eine route.pug geschrieben werden 
// Eine layout.pug schreiben, in der alle metadaten (leaflet...) eingebunden sind und das template (block content und block
// foot in den einzelnen router.pug definieren)
// in router.js dateien die funktion retrieveAllPoisFromDB nutzen
// Minute 34: birds-router.js enthält routen. app.js starten und über diese routen, die aus bird aufrufen