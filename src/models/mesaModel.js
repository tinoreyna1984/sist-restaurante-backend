// FUNDAMENTAL: usar los recursos de Sequelize y la configuracion de la BD ya creada
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Mesa extends Model {}

Mesa.init(
    {
        id : { type : DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        codMesa : { type : DataTypes.TEXT },
        maxComensales : { type : DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: "mesa",
      timestamps: false,
    }
);

module.exports = Mesa;

