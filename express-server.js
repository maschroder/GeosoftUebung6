const express = require('express')
const path = require('path')

const app = express()
const port = 3000 // unsafe ports: https://superuser.com/questions/188058/which-ports-are-considered-unsafe-by-chrome 
const host = "localhost" //127.0.0.1

app.listen(port, host)

var seite1 = require('./routes/seite1');
var seite2 = require('./routes/seite2');
var seite3 = require('./routes/seite3');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// adding my custom routes
// app.use('/', seite1);
app.use('/seite1', seite1);
app.use('/seite2', seite2);
app.use('/seite3', seite3);






// define a route
// function taken from https://expressjs.com/de/starter/hello-world.html
app.get('/', (req, res) => 
{
  //res.send('Hello World!')
  res.set('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, '/public', 'index.html'))
})


// serve static files
// function taken from https://expressjs.com/de/starter/static-files.html 
//app.use(express.static('public'))
//app.use('/static', express.static('public'))
//app.use('/static', express.static(path.join(__dirname, 'public'))) --benutzen um leaflet einzubinden
//console.log(__dirname) // __dirname tells you the absolute path of the directory containing the currently executing file
//console.log(path.join(__dirname, 'public'))

// redirection of the basic path to the html page used as an entry point for the static website
/*
app.get('/', (req, res) => 
{
    res.redirect('/example06.html')
})
*/

app.listen(port, () => 
{
  console.log(`App listening at http://localhost:${port}`)
})


// 3 HTML Seiten erstellen, in public Ordner und über Methode aus Beispielcode aufrufen
// .gitignore erstellen und node_modules darin ignorieren
// Code Beispiel express_server.js -> über routen auf die verschiedenen html seiten (html to pug) zugreifen
// Zu jeder Route in der server.js muss eine route.js und eine route.pug geschrieben werden 
// Eine layout.pug schreiben, in der alle metadaten (leaflet...) eingebunden sind und das template (block content und block
// foot in den einzelnen router.pug definieren)
// in router.js dateien die funktion retrieveAllPoisFromDB nutzen
// Minute 34: birds-router.js enthält routen. app.js starten und über diese routen, die aus bird aufrufen