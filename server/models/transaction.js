var mongoose = require("mongoose");

var TransactionSchema = new mongoose.Schema({
  loanId: Number,
  amount: Number,
  deposited: Date,
  payBalance: Boolean
});

module.exports = mongoose.model('Transaction', TransactionSchema); 
