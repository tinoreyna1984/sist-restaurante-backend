// Definicion de rutas
const express = require("express");
const MesaController = require("../controllers/mesaController");
const router = express.Router();

// FUNDAMENTAL: ruta central del API de Items de Restaurantes
module.exports.MesaAPI = (app) => {
    router
      .route("/")
      .get(MesaController.getAll)
      .post(MesaController.create);
    router
      .route("/:id")
      .get(MesaController.getOne)
      .put(MesaController.updateOne)
      .delete(MesaController.deleteOne);
    app.use("/api/mesa", router);
  };
  