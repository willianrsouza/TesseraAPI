const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const dbUrl = 'mongodb+srv://Willian:root@cluster0.bruyr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

  app.use(bodyParser.json());

  const routes = require('D:/Tessera/TesseraAPI/Routes/routes.js');
  app.use('/api', routes);

  mongoose.connect(dbUrl, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }, () => { 
    console.log('DATABASE - CHECK') 
  })
  
  module.exports = mongoose

app.listen(process.env.port || 4444, () =>{
  console.log('OPEN PORT: '+ 4444);
});


