const { Sequelize } = require('sequelize');

const connection = new Sequelize('guia_perguntas', 'root', 'wcs0420dev', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307,
    logging: false
});

module.exports = connection;