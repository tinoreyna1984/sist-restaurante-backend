// FUNDAMENTAL: usar los recursos de Sequelize y la configuracion de la BD ya creada
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class FacturaDet extends Model {}

FacturaDet.init(
    {
        id : { type : DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        codFactCab : { type : DataTypes.TEXT },
        itemConsumoFact : { type : DataTypes.TEXT },
        precio : { type : DataTypes.REAL },
        cantItem : { type : DataTypes.INTEGER },
        precioCalculado : { type : DataTypes.REAL },
    },
    {
      sequelize,
      modelName: "facturaDet",
      timestamps: false,
    }
);

module.exports = FacturaDet;

