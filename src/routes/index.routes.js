// Definicion de rutas
const express = require("express");
const router = express.Router();

// FUNDAMENTAL: ruta central del API de Items de Restaurantes
module.exports.IndexAPI = (app) => {
    router.get('/', function(req, res) {  
        res.status(200).send("Aqui comienza el API");
    });
    app.use('/', router);
};