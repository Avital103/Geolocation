import express from 'express';
const helloRouter = require("./hello");
const distanceRouter = require("./distance");
const healthRouter = require("./health");
const popularSearchRouter = require('./popular_search')
let router = express.Router();

router.use('/hello', helloRouter);
router.use('/distance', distanceRouter);
router.use('/health', healthRouter);
router.use('/popularSearch', popularSearchRouter);

module.exports = router;
