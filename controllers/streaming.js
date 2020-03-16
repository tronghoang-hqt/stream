const streamingService = require('../services/streaming');
module.exports = {
    streaming: function(req, res, next) {
        const head = {
            'Content-Type': 'video/mp4'
        };

        res.writeHead(200, head);

        const stream = streamingService.streaming('./assets/video.mp4');
        stream.pipe(res);
    }
}