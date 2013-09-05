var path = require('path');
var https = require('https');
var http = require('http');
var fs = require('fs');

//for error checking/throwing
var assert = require("assert");

//for web server 
var restify = require("restify");

//for logging using winston
var winston = require("winston");

// for configurations
var env = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];

// Setup logging
var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)(
      {
        filename: config.log.filename,
        colorize: config.log.colorize,
        maxsize: config.log.maxsize,
        timestamp: config.log.timestamp
      })
  ]
});


/**
   * Create the restify server here
 * defines the name and the version number
 * the version number should corilate to 
 * npm version in package.json
 */
var server = restify.createServer({
    name: config.app.name
});

var serverOptions = {
  certificate: fs.readFileSync('config/certificate.pem'),
  key: fs.readFileSync('config/key.pem')
};


// restify settings
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

/**
 * route all get calls to the backbone app
 */
server.get(/\//, restify.serveStatic({
  directory: './app',
  default: 'index.html',
  magAge: config.maxAge
}));

/**
 * start the server and listen to it on the specified port number
 */
server.listen(config.port, function onListening() {
  logger.info(config.app.name + " started on port " + config.port + "!  " +
          "config: " + JSON.stringify(config, null, '\t'));
});

