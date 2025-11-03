const Sequelize = require("sequelize");
const connection = require("../databse");

const Resposta = connection.define("respostas", {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Resposta.sync({force: false}).then(()=> {
    console.log("Tabela de Respostas criada");
});

module.exports = Resposta;