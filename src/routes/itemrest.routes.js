// Definicion de rutas
const express = require("express");
const ItemRestauranteController = require("../controllers/itemRestauranteController");
const router = express.Router();

// FUNDAMENTAL: ruta central del API de Items de Restaurantes
module.exports.ItemRestAPI = (app) => {
  router
    .route("/")
    .get(ItemRestauranteController.getAll)
    .post(ItemRestauranteController.create);
  router
    .route("/:id")
    .get(ItemRestauranteController.getOne)
    .put(ItemRestauranteController.updateOne)
    .delete(ItemRestauranteController.deleteOne);
  app.use("/itemrestaurante", router);
};
