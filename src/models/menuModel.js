// FUNDAMENTAL: usar los recursos de Sequelize y la configuracion de la BD ya creada
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Menu extends Model {}

Menu.init(
    {
        id : { type : DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        fechaMenu : { type : DataTypes.DATE, defaultValue: DataTypes.NOW },
        codMenu : { type : DataTypes.TEXT },
        entrada : { type : DataTypes.TEXT },
        segundo : { type : DataTypes.TEXT },
        postre : { type : DataTypes.TEXT },
        precio : { type : DataTypes.REAL },
    },
    {
      sequelize,
      modelName: "menu",
      timestamps: false,
    }
);

module.exports = Menu;

