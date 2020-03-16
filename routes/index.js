const express = require('express');
const router = express.Router();
const controllers = require('../controllers/streaming');

router.get('/', controllers.streaming);
module.exports = router;