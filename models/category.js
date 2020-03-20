const Sequelize = require('sequelize');
const sequelize = require('../data/connectDB')
const Video = require('../models/video')
const Category = sequelize.define('category', {
    category_Id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
    },
    category: {
        type: Sequelize.STRING,
    },

}, {
    sequelize,
    timestamps: false,
});
module.exports = Category;