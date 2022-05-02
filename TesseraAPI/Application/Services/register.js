const registerModel = require('../../Domain/Models/register.js');


exports.create = function (req, res) {
  registerModel.create(req.body).then(function(registerModel){
  res.send(registerModel);
  });
};


exports.details = function (req, res) {
  registerModel.find({}).then(function(registerModel){
  res.send(registerModel);
  });
};

