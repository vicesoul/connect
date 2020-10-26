var connect = require('./index');
var http = require('http');

var app = connect();


app.use('/foo', function fooMiddleware(req, res, next) {
  // req.url starts with "/foo"
  res.msg = 'fooooooo'
  next();
});
app.use('/bar', function barMiddleware(req, res, next) {
  // req.url starts with "/bar"
  next();
});

// respond to all requests
app.use(function(req, res){
  res.end('Hello from Connect!\n' + res.msg);
});

http.createServer(app).listen(3000);
