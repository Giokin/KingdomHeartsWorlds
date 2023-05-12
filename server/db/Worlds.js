// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:
const Sequelize = require('sequelize')
const db = require('./database')

const Worlds = db.define('worlds', {
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    key: {
        type: Sequelize.STRING,
        allowNull: false
    },
    boss: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Worlds;