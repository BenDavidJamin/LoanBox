var mongoose = require('mongoose');
var Transaction = mongoose.model('Transaction', require('../models/transaction')); 
var Loan = mongoose.model('Loan', require('../models/loan')); 
// for cron adding transactions
var cronJob = require('cron').CronJob;

var interest = new cronJob('00 30 11 * * 1-7', function(){
  Loan.find(function(err, loans){
    if(err){
      console.error(err);
    }
    for (var i = 0;i< loans.length;i++){
      var loan = loans[i];
      if(loan.rate&&loan.balance){

        var dayly = ((loan.balance*(loan.rate/100))/365).toFixed(2);
        loan.interest = (Number(dayly) + loan.interest).toFixed(2);

        var transaction = new Transaction({
          amount: dayly,
          deposited: Date.now(),
          loanId: loan.id
        });
	loan.transactions.push(transaction);

        loan.save();
	transaction.save();
      }
    }
  });
    
}, function(){

}, true, "America/Los_Angeles");


exports.show = function(req, res){
  var transactions;
  if(typeof req.params.id === "undefined"){
    Transaction.find(function(err, result){
      if(err){

      }
      res.send(result);
    });
  }else{
    Transaction.findOne({id: req.params.id},function(err, result){
      if(err){

      }
      res.send(result);
    });
  }
}

exports.destroy = function(req, res){
    Transaction.findOne({id: req.params.id},function(err, result){
      if(err){

      }
      res.send(result);
    });
}

exports.create = function(req, res){

  console.log("transaction sent", req.params);
  var transaction = new Transaction(req.params);
  
  transaction.save(function(err, product){
    if(err){
      console.error(err);
    }
    var amount = req.params.amount;
    
    var id = mongoose.Types.ObjectId(req.params.loanId);

    Loan.findById(id, function (err, loan) {
      if(err){
        console.error(err);
      }

      if(req.params.payBalance){
        if(amount > loan.balance){
          loan.balance = 0;
        }else{
          loan.balance = (loan.balance + amount).toFixed(2);
        }
      } else {
        
        if(amount > loan.interest) {
          loan.interest = 0;
        }else{
          loan.interest = (loan.interest + amount).toFixed(2);
        }
      }
      loan.transactions.push(transaction);
      loan.save();
    });

  });



  res.send();
}
