/**
 * Centralizacion del API. Considerar proyecto como reutilizable
 */

// FUNDAMENTAL: crear un app backend con Express
const express = require('express');
const sequelize = require("./config/db");
const { Config } = require('./config/config');
const { ItemRestAPI } = require('./routes/itemrest.routes');
const { UsuariosAPI } = require('./routes/usuario.routes');
const { MesaAPI } = require('./routes/mesa.routes');
const { MeseroAPI } = require('./routes/mesero.routes');
const { MenuAPI } = require('./routes/menu.routes');
const { FactCabAPI } = require('./routes/factcab.routes');
const { FactDetAPI } = require('./routes/factdet.routes');
const app = express();

// Crea y conecta la BD segun lo determinado en config/db.js
sequelize.sync().then(() => console.log("Created and connected successfully"));

// FUNDAMENTAL: uso del Express
app.use(express.json());

// llamado de las APIS definidas en el ruteo
ItemRestAPI(app);
UsuariosAPI(app);
MesaAPI(app);
MeseroAPI(app);
MenuAPI(app);
FactCabAPI(app);
FactDetAPI(app);

// FUNDAMENTAL: dejar corriendo (listener) el app en el puerto configurado
app.listen(Config.PORT || 3001, () => {
    console.log(`Server started at port ${Config.PORT}`);
});
