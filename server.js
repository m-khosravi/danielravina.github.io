// Simplest express HTTP server for development
var express      = require('express'),
    app          = express(),
    server       = require('http').createServer(app);

var APP_PORT  = 3000;

server.listen(APP_PORT);

app.use(express.static('.'));
app.get("/", function(req, res) {
  res.render("index.html")
})

console.log('App listening on port ' + APP_PORT);