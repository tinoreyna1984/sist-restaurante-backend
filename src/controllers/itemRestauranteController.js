// IMPORTANTE: el controlador USA el modelo. Hay que importarlo
const ItemRestaurante = require("../models/itemRestauranteModel");

// FUNDAMENTAL: definiciones del CRUD
module.exports = {
  getAll: async (req, res) => {
    try {
      let items = await ItemRestaurante.findAll();
      //res.status(200).send("Menu items: " + JSON.stringify(items, null, 2));
      res.json(items);
      console.log(items);
      console.debug("Menu items: " + JSON.stringify(items, null, 2));
    } catch (error) {
      console.error(error);
      response.status(400).send(error);
    }
  },
  create: async (req, res) => {
    try {
      const { body } = req;
      if (!body || Object.keys(body) === 0) {
        return res.status(400).send("Bad create request");
      } else {
        let created = await ItemRestaurante.create(body);
        res
          .status(200)
          .send(
            "Menu item inserted. Created: " + JSON.stringify(created, null, 2)
          );
        console.debug(
          "Menu item inserted. Created: " + JSON.stringify(created, null, 2)
        );
      }
    } catch (error) {
      console.error(error);
      response.status(400).send(error);
    }
  },
  getOne: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let item = await ItemRestaurante.findOne(
        { where: { id: id } },
        { raw: true }
      );
      if (item === null) {
        return res.status(400).send("Bad request - Not found");
      } else {
        /* res
          .status(200)
          .send(`Item with ID ${id} found: ${JSON.stringify(item, null, 2)}`); */
        res.json(item);
        console.log(items);
        console.debug(
          `Item with ID ${id} found: ${JSON.stringify(item, null, 2)}`
        );
      }
    } catch (error) {
      console.error(error);
      response.status(400).send(error);
    }
  },
  updateOne: async (req, res) => {
    try {
      const {
        body,
        params: { id },
      } = req;
      let item = await ItemRestaurante.findOne({ where: { id: id } });
      if (item === null) {
        return res.status(400).send("Bad request - Not found");
      } else {
        let updatedItem = await ItemRestaurante.update(
          body,
          { where: { id: id } },
          { raw: true }
        );
        res
          .status(200)
          .send(`Item with ID ${id} updated: ${JSON.stringify(body, null, 2)}`);
      }
    } catch (error) {
      console.error(error);
      response.status(400).send(error);
    }
  },
  deleteOne: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let item = await ItemRestaurante.findOne({ where: { id: id } });
      if (item === null) {
        return res.status(400).send("Bad request - Not found");
      } else {
        await ItemRestaurante.destroy({ where: { id: id } });
        res.status(200).send(`Item with ID ${id} deleted`);
      }
    } catch (error) {
      console.error(error);
      response.status(400).send(error);
    }
  },
};
