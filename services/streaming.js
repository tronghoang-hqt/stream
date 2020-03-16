const fs = require('fs');

module.exports = {
    streaming: function (videoSource) {
        return fs.createReadStream(videoSource);
    }
}