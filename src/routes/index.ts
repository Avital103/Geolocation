import express from 'express';
const helloRouter = require("./hello");
const distanceRouter = require("./distance");
let router = express.Router();

router.use('/hello', helloRouter);
router.use('/distance', distanceRouter);

module.exports = router;
