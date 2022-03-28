// IMPORTANTE: el controlador USA el modelo. Hay que importarlo
const Usuarios = require("../models/usuarioModel");

// FUNDAMENTAL: definiciones del CRUD
module.exports = {
    getAll: async (req, res) => {
        try {
          let users = await Usuarios.findAll();
          res.status(200).send("Users: " + JSON.stringify(users, null, 2));
          console.debug("Users: " + JSON.stringify(users, null, 2));
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
            let created = await Usuarios.create(body);
            res
              .status(200)
              .send(
                "User inserted. Created: " + JSON.stringify(created, null, 2)
              );
            console.debug(
              "User inserted. Created: " + JSON.stringify(created, null, 2)
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
          let item = await Usuarios.findOne(
            { where: { id: id } },
            { raw: true }
          );
          if (item === null) {
            return res.status(400).send("Bad request - Not found");
          } else {
            res
              .status(200)
              .send(`User with ID ${id} found: ${JSON.stringify(item, null, 2)}`);
            console.debug(
              `User with ID ${id} found: ${JSON.stringify(item, null, 2)}`
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
          let user = await Usuarios.findOne({ where: { id: id } });
          if (user === null) {
            return res.status(400).send("Bad request - Not found");
          } else {
            let updatedItem = await Usuarios.update(
              body,
              { where: { id: id } },
              { raw: true }
            );
            res
              .status(200)
              .send(`User with ID ${id} updated: ${JSON.stringify(body, null, 2)}`);
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
          let user = await Usuarios.findOne({ where: { id: id } });
          if (user === null) {
            return res.status(400).send("Bad request - Not found");
          } else {
            await Usuarios.destroy({ where: { id: id } });
            res.status(200).send(`User with ID ${id} deleted`);
          }
        } catch (error) {
          console.error(error);
          response.status(400).send(error);
        }
      },
};