import express from 'express';
const helloRouter = require("./hello");
const distanceRouter = require("./distance");
const healthRouter = require("./health");
let router = express.Router();

router.use('/hello', helloRouter);
router.use('/distance', distanceRouter);
router.use('/health', healthRouter);

module.exports = router;
