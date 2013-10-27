/**
 * controllers
 */

var loans = require("./controllers/loans");
var transactions = require("./controllers/transactions");

module.exports = function (server){

  //loans
  server.get("/loans", loans.show);
  server.get("/loans/:id", loans.show);
  server.post("/loans", loans.create);

  /*
  server.put("/loans/:id", loans.update);
  server.del("/loans/:id", loans.destroy);
  */

  //transactions
  server.get("/transactions", transactions.show);
  server.get("/transactions/:id", transactions.show);
  //server.put("/transactions/:id", transactions.update);
  server.post("/transactions", transactions.create);

}



