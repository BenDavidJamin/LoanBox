/**
 * Environment dependent configuration properties
 */

module.exports = {
  development: {
    root: require('path').normalize(__dirname + '/..'),
    app: {
      name: "Loan Box",
      description: "Kinda like red box for loans"
    },

    host: 'localhost',
    port: 8003,
    maxAge: 1,
    
    session_timeout: 1200000, //defualts to 20 minutes, in ms (20 * 60 * 1000)
    socket_loglevel: '1', // 0 - error, 1 - warn, 2 - info, 3 - debug

    db: {
      url: "mongodb://localhost"
    },

    mail: {

    }, 

    log: {
      filename: "./logs/development.log",
      colorize: true,
      maxsize: 1024*1024*10, // ten Megabytes of log file
      timestamp: true
    },

  },

  debug: {

    db: {

    },

    log: {
      filename: "./logs/debug.log",
      colorize: true,
      maxsize: 1024*1024*10, // ten Megabytes of log file
      timestamp: true

    }
  },

  production: {

    db: {

    }, 

    mail: {

    },

    log: {
      filename: "./logs/production.log",
      colorize: true,
      maxsize: 1024*1024*10, // ten Megabytes of log file
      timestamp: true
    }
  }

}
