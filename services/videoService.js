const Video = require('../models/video');
module.exports = {
    getListVideoService: function() {
        return Video.findAll();
    }
}