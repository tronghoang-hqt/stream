const Sequelize = require('sequelize');
const config = require("../config/sequelize.json");
var sequelize = new Sequelize(config.database, config.username, config.password, config);
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
module.exports = sequelize