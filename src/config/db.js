/**
 * Establece la configuracion y conexion a la BD de Sqlite3
 * TODO: hacer extensible a otros motores de BD
 */
const Sequelize = require("sequelize");
require("dotenv").config();
const db_engine = process.env.DB_ENGINE;
let sequelize = null;

if (db_engine === "sqlite3") {
  sequelize = new Sequelize("crud-db", "user", "password", {
    dialect: "sqlite",
    host: "./backend.sqlite",
  });
}
module.exports = sequelize;
