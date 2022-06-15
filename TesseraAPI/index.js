const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json());

const router = require('./routes/routes');
app.use('/api', router);


app.listen(process.env.port || 4444, () => {
    console.log(`Server running at ${4444} !`);
})