// FUNDAMENTAL: usar los recursos de Sequelize y la configuracion de la BD ya creada
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Mesero extends Model {}

Mesero.init(
    {
        id : { type : DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        codMesero : { type : DataTypes.TEXT },
        nombreMesero : { type : DataTypes.TEXT }
    },
    {
      sequelize,
      modelName: "mesero",
      timestamps: false,
    }
);

module.exports = Mesero;

