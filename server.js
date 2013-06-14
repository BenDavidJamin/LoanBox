var express = require("express");
var path = require('path');
var https = require('https');
var http = require('http');
var fs = require('fs');

// This line is from the Node.js HTTPS documentation
var options = {
  key: fs.readFileSync('config/key.pem'),
  cert: fs.readFileSync('config/certificate.pem')
};

var app = express();

app.configure(function (){
  app.use(function (req, res, next) {
    res.setHeader('Strict-Transport-Security', 'max-age=8640000; includeSubDomains');
    if (!req.secure) {
        return res.redirect(301, 'https://' + req.host  + ":" + 443 + req.url);
    } else {
        return next();
    }
  });
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.static(path.join(__dirname, 'app')));
});

http.createServer(app).listen(80);
// Run separate https server if on localhost
https.createServer(options, app).listen(443, function () {
  console.log("Express server listening with https on port %d in %s mode", this.address().port, app.settings.env);
});
