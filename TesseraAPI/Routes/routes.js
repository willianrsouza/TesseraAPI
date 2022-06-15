const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const controller = require('../controllers/controller')

router.post('/login', function (req, res) {
    const user = {id: 3, points: 100};
    const token = jwt.sign({ user }, 'secret_key');
    res.json({
        token: token
    });
});

router.get('/protected/data', ensureToken, function (req, res) {
    jwt.verify(req.token, 'secret_key', function (err, data) {
        if (err) {
            res.sendStatus(403);
        } else {      
        res.json({
            text: 'Login Efetuado!',
            data: data
        });
     }
  })
});

function ensureToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.json({
        text: 'Realize a Autenticação!'
        });
       res.sendStatus(403);
    }
}

router.get('/emails', controller.findAll);

router.post('/emails/new', controller.create);

router.get('/emails/:id', controller.findById);

router.put('/emails/edit/:id', controller.update);

router.delete('/emails/delete/:id', controller.delete)

module.exports = router;
