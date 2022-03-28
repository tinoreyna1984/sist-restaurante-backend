/**
 * Centraliza la configuracion en todo el app
 */

require('dotenv').config();

module.exports.Config = {
    PORT : process.env.PORT,
    DB_ENGINE : process.env.DB_ENGINE,
}