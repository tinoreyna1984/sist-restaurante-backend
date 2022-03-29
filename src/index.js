/**
 * Centralizacion del API. Considerar proyecto como reutilizable
 */

// FUNDAMENTAL: crear un app backend con Express
const express = require('express');
const sequelize = require("./config/db");
const cors = require('cors');
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

// Crea y conecta la BD segun lo determinado en config/db.js
sequelize.sync().then(() => console.log("Created and connected successfully"));

// IMPORTANTE: uso de CORS
const corsOptions = {
    origin: '*',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200,
  }
app.use(cors(corsOptions));
/* app.use((req, res, next) => {
    res.set("Access-Control-Allow-Credentials", "true");
    res.set("Access-Control-Allow-Origin", "https://sist-restaurante-backend.herokuapp.com/");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Allow-Methods", "OPTIONS,GET,PUT,POST,DELETE");
    next();
  }); */

// FUNDAMENTAL: uso del Express
app.use(express.json());

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
