const express = require('express');
const router = express.Router();
require('../data/connectDB');
const controllers = require('../controllers/streaming');

router.get('/', controllers.streaming);
router.get('/data', controllers.data);

module.exports = router;