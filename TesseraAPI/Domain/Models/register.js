const moongose = require('mongoose');

const Register = moongose.model('Tessera', {
  name: String,
  email: String,
  recoveryEmail: String,
})

module.exports = Register