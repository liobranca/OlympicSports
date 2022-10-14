const Sequelize = require("sequelize");

const db = new Sequelize("olympicsports",null, null, {
    host: "localhost",
    dialect: "postgres",
    logging: false
});


module.exports = db

