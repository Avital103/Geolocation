let express = require('express');
const helloRouter = require("./hello");
let router = express.Router();

router.use('/hello', helloRouter);

module.exports = router;
