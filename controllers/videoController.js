var videoService = require('../services/videoService');

module.exports = {
    getListVideo: function(req, res, next) {
        videoService.getListVideoService().then(async data => {
            await data.forEach(async videos => {
                await videos.videos.forEach(video => {
                    video.sources = [video.sources];
                })
            });
            await res.send({ "data": data })
        });
    }
}