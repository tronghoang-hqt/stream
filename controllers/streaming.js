const streamingService = require('../services/streaming');
const { Video } = require('../models/video');
export default {
    streaming: function(req, res, next) {
        const head = {
            'Content-Type': 'video/mp4'
        };

        res.writeHead(200, head);

        const stream = streamingService.streaming('./assets/video.mp4');
        stream.pipe(res);
    },
    data: function(req, res, next) {
        let data = Video.find();
        res.send(data);
    }
}