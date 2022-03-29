// IMPORTANTE: el controlador USA el modelo. Hay que importarlo
const Menu = require("../models/menuModel");

// FUNDAMENTAL: definiciones del CRUD
module.exports = {
    getAll: async (req, res) => {
        try {
          let menus = await Menu.findAll();
          //res.status(200).send("Menus: " + JSON.stringify(menus, null, 2));
          res.json(menus);
          console.debug("Menus: " + JSON.stringify(menus, null, 2));
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
            let created = await Menu.create(body);
            res
              .status(200)
              .send(
                "Menu inserted. Created: " + JSON.stringify(created, null, 2)
              );
            console.debug(
              "Menu inserted. Created: " + JSON.stringify(created, null, 2)
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
          let menu = await Menu.findOne(
            { where: { id: id } },
            { raw: true }
          );
          if (menu === null) {
            return res.status(400).send("Bad request - Not found");
          } else {
            /* res
              .status(200)
              .send(`Menu with ID ${id} found: ${JSON.stringify(menu, null, 2)}`); */
              res.json(menu);
            console.debug(
              `Menu with ID ${id} found: ${JSON.stringify(menu, null, 2)}`
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
          let menu = await Menu.findOne({ where: { id: id } });
          if (menu === null) {
            return res.status(400).send("Bad request - Not found");
          } else {
            let updatedItem = await Menu.update(
              body,
              { where: { id: id } },
              { raw: true }
            );
            res
              .status(200)
              .send(`Menu with ID ${id} updated: ${JSON.stringify(body, null, 2)}`);
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
          let menu = await Menu.findOne({ where: { id: id } });
          if (menu === null) {
            return res.status(400).send("Bad request - Not found");
          } else {
            await Menu.destroy({ where: { id: id } });
            res.status(200).send(`Menu with ID ${id} deleted`);
          }
        } catch (error) {
          console.error(error);
          response.status(400).send(error);
        }
      },
};