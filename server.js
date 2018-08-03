var express = require('express');
var app = express();

app.use('/', express.static('public'));
//app.use(express.static('images'));

app.listen(3000,'0.0.0.0');

//const http = require('http')
//const port = 3000
//
//const requestHandler = (requestAnimationFrame, resposnse) => {
 //   console.log(request.url)
 //   resposnse.end('Hello Node.js Server!')
//}

//const server = http.createServer(requestHandler)

//server.listen(port, (err) => {
//    if (err) {
//        return console.log('Fucked up...', err)
//    }
//
//    console.log(`Server is listening on port ${port}`)
//
//})