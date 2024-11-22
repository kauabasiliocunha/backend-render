const sequelize = require("sequelize");
require('dotenv').config(); // Carrega as variáveis do .env

const conexao = new sequelize(
    process.env.DB_NAME,      // Nome do banco
    process.env.DB_USER,      // Usuário
    process.env.DB_PASSWORD,  // Senha
    {
        dialect: "postgres",    // Dialeto do banco
        host: process.env.DB_HOST, // Host (Render fornece)
        port: process.env.DB_PORT || 5432, // Porta do banco
        dialectOptions: {
            ssl: {
                require: true,             // Exige SSL
                rejectUnauthorized: false, // Permite certificado autoassinado
            },
        },
        logging: false, // Desativa logs SQL (opcional)
    }
);

module.exports = { conexao };
