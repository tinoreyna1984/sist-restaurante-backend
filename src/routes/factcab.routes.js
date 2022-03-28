// Definicion de rutas
const express = require("express");
const FactCabController = require("../controllers/facturaCabController");
const router = express.Router();

// FUNDAMENTAL: ruta central del API de Items de Restaurantes
module.exports.FactCabAPI = (app) => {
    router
      .route("/")
      .get(FactCabController.getAll)
      .post(FactCabController.create);
    router
      .route("/:id")
      .get(FactCabController.getOne)
      .put(FactCabController.updateOne)
      .delete(FactCabController.deleteOne);
    app.use("/api/fact_cab", router);
  };
  