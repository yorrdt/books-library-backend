const db_config = require("../config/database_config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    db_config.db_name,
    db_config.username,
    db_config.password,
    {
        host: db_config.ip,
        port: db_config.port,
        dialect: "postgres",
        define: {
            timestamps: false,
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.book = require("../models/book.model")(sequelize, Sequelize);

module.exports = db;