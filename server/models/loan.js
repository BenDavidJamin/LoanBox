var mongoose = require("mongoose");

var LoanSchema = new mongoose.Schema({
    name: String,
    description: String,
    balance: Number,
    rate: Number,
    compounding: Boolean,
    interest: Number,
    transactions: []
});

module.exports = mongoose.model('Loan', LoanSchema); 
