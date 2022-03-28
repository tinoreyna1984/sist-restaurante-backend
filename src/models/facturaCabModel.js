// FUNDAMENTAL: usar los recursos de Sequelize y la configuracion de la BD ya creada
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class FacturaCab extends Model {}

FacturaCab.init(
    {
        id : { type : DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        codFactCab : { type : DataTypes.TEXT },
        codMesa : { type : DataTypes.TEXT },
        codMesero : { type : DataTypes.TEXT },
    },
    {
      sequelize,
      modelName: "facturaCab",
      timestamps: false,
    }
);

module.exports = FacturaCab;

