// Definicion de rutas
const express = require("express");
const UsuariosController = require("../controllers/usuarioController");
const router = express.Router();

// FUNDAMENTAL: ruta central del API de Items de Restaurantes
module.exports.UsuariosAPI = (app) => {
    router
      .route("/")
      .get(UsuariosController.getAll)
      .post(UsuariosController.create);
    router
      .route("/:id")
      .get(UsuariosController.getOne)
      .put(UsuariosController.updateOne)
      .delete(UsuariosController.deleteOne);
    app.use("/api/usuario", router);
  };
  