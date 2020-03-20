const Sequelize = require('sequelize');
const sequelize = require('../data/connectDB')
const Category = require('../models/category')
const Video = sequelize.define('video', {
    video_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
    },
    sources: {
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
    studio: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    category_Id: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    timestamps: false,
});
Category.hasMany(Video, { foreignKey: 'category_Id' })
Video.belongsTo(Category, {
    foreignKey: {
        name: 'category_Id'
    }
});
module.exports = Video;