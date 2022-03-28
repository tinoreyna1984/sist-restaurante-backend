// Definicion de rutas
const express = require("express");
const FactDetController = require("../controllers/facturaDetController");
const router = express.Router();

// FUNDAMENTAL: ruta central del API de Items de Restaurantes
module.exports.FactDetAPI = (app) => {
    router
      .route("/")
      .get(FactDetController.getAll)
      .post(FactDetController.create);
    router
      .route("/:id")
      .get(FactDetController.getOne)
      .put(FactDetController.updateOne)
      .delete(FactDetController.deleteOne);
    app.use("/api/fact_det", router);
  };
  