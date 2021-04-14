let express = require('express');
let helloRouter = express.Router();

helloRouter.get('/', function (req, res) {
    res.status(200).send();
});

module.exports = helloRouter;
