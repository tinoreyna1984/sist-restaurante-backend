// FUNDAMENTAL: usar los recursos de Sequelize y la configuracion de la BD ya creada
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class ItemRestaurante extends Model {}

ItemRestaurante.init(
  {
      id : { type : DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      codItem : { type : DataTypes.TEXT },
      descripcion : { type : DataTypes.TEXT },
      precio : { type : DataTypes.REAL },
      disponible : { type : DataTypes.TEXT }
  },
  {
    sequelize,
    modelName: "itemRestaurante",
    timestamps: false,
  }
);

module.exports = ItemRestaurante;

