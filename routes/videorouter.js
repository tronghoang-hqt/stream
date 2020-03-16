const express = require('express');
const router = express.Router();
const videoControllers = require('../controllers/videoController');
router.get('/listvideos', videoControllers.getListVideo);

module.exports = router;