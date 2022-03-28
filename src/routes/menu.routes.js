// Definicion de rutas
const express = require("express");
const MenuController = require("../controllers/menuController");
const router = express.Router();

// FUNDAMENTAL: ruta central del API de Items de Restaurantes
module.exports.MenuAPI = (app) => {
    router
      .route("/")
      .get(MenuController.getAll)
      .post(MenuController.create);
    router
      .route("/:id")
      .get(MenuController.getOne)
      .put(MenuController.updateOne)
      .delete(MenuController.deleteOne);
    app.use("/api/menu", router);
  };
  