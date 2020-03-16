var videoService = require('../services/videoService');
module.exports = {
    getListVideo: function(req, res, next) {
        videoService.getListVideoService().then(videos => {
            res.send(videos);
        });

    }
}