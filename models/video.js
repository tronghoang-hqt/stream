const Sequelize = require('sequelize');
const sequelize = require('../data/connectDB')
const Video = sequelize.define('video', {
    video_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
    },
    source: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    card: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    background: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    timestamps: false,
});
module.exports = Video;