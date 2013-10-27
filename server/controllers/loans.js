var mongoose = require('mongoose');
var Loan = mongoose.model('Loan', require('../models/loan')); 

exports.show = function(req, res){
  var loans;
  if(typeof req.params.id === "undefined"){
    Loan.find(function(err, result){
      if(err){

      }
      res.send(result);
    });
  }else{
    Loan.findOne({id: req.params.id},function(err, result){
      if(err){

      }
      res.send(result);
    });
  }
}

exports.destroy = function(req, res){

}

exports.create = function(req, res){

  var loan = new Loan(req.params);
  loan.save(function(err){
    if(err){

    }
    console.log("saved new loan");
  });

  res.send();
}
