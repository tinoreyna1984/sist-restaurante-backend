// Definicion de rutas
const express = require("express");
const MeseroController = require("../controllers/meseroController");
const router = express.Router();

// FUNDAMENTAL: ruta central del API de Items de Restaurantes
module.exports.MeseroAPI = (app) => {
    router
      .route("/")
      .get(MeseroController.getAll)
      .post(MeseroController.create);
    router
      .route("/:id")
      .get(MeseroController.getOne)
      .put(MeseroController.updateOne)
      .delete(MeseroController.deleteOne);
    app.use("/mesero", router);
  };
  