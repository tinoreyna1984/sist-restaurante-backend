// FUNDAMENTAL: usar los recursos de Sequelize y la configuracion de la BD ya creada
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Usuarios extends Model {}

Usuarios.init(
    {
        id : { type : DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        usuario : { type : DataTypes.TEXT },
        clave : { type : DataTypes.TEXT },
        nombreUsuario : { type : DataTypes.TEXT }
    },
    {
      sequelize,
      modelName: "usuarios",
      timestamps: false,
    }
);

module.exports = Usuarios;

