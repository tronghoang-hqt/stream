const Video = require('../models/video');
const Category = require('../models/category')
module.exports = {
    getListVideoService: function() {
        return Category.findAll({
            include: [{
                model: Video,
                required: true,
                attributes: ['description', 'sources', 'card', 'background', 'title', 'studio']
            }],
            attributes: ['category']
        })
    }
}