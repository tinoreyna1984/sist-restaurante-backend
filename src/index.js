/**
 * Centralizacion del API. Considerar proyecto como reutilizable
 */

// FUNDAMENTAL: crear un app backend con Express
const express = require('express');
const sequelize = require("./config/db");
const { Config } = require('./config/config');
const { IndexAPI } = require('./routes/index.routes');
const { ItemRestAPI } = require('./routes/itemrest.routes');
const { UsuariosAPI } = require('./routes/usuario.routes');
const { MesaAPI } = require('./routes/mesa.routes');
const { MeseroAPI } = require('./routes/mesero.routes');
const { MenuAPI } = require('./routes/menu.routes');
const { FactCabAPI } = require('./routes/factcab.routes');
const { FactDetAPI } = require('./routes/factdet.routes');
const app = express();
//const router = express.Router(); // correccion de bug

// Crea y conecta la BD segun lo determinado en config/db.js
sequelize.sync().then(() => console.log("Created and connected successfully"));

// correccion de bug
/*router.get('/', function(req, res) {  
    res.status(200).send("Aqui comienza el API");
});*/

// FUNDAMENTAL: uso del Express
app.use(express.json());
//app.use('/', router);

// llamado de las APIS definidas en el ruteo
IndexAPI(app);
ItemRestAPI(app);
UsuariosAPI(app);
MesaAPI(app);
MeseroAPI(app);
MenuAPI(app);
FactCabAPI(app);
FactDetAPI(app);

// FUNDAMENTAL: dejar corriendo (listener) el app en el puerto configurado
app.listen(Config.PORT || 3000, () => {
    console.log(`Server started at port ${process.env.PORT}`);
});
