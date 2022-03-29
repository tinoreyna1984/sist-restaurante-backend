// IMPORTANTE: el controlador USA el modelo. Hay que importarlo
const Mesa = require("../models/mesaModel");

// FUNDAMENTAL: definiciones del CRUD
module.exports = {
    getAll: async (req, res) => {
        try {
          let tables = await Mesa.findAll();
          //res.status(200).send("Tables: " + JSON.stringify(tables, null, 2));
          res.json(tables);
          console.debug("Tables: " + JSON.stringify(tables, null, 2));
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
            let created = await Mesa.create(body);
            res
              .status(200)
              .send(
                "Table inserted. Created: " + JSON.stringify(created, null, 2)
              );
            console.debug(
              "Table inserted. Created: " + JSON.stringify(created, null, 2)
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
          let table = await Mesa.findOne(
            { where: { id: id } },
            { raw: true }
          );
          if (table === null) {
            return res.status(400).send("Bad request - Not found");
          } else {
            /* res
              .status(200)
              .send(`Table with ID ${id} found: ${JSON.stringify(table, null, 2)}`); */
            res.json(table);
            console.debug(
              `Table with ID ${id} found: ${JSON.stringify(table, null, 2)}`
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
          let table = await Mesa.findOne({ where: { id: id } });
          if (table === null) {
            return res.status(400).send("Bad request - Not found");
          } else {
            let updatedItem = await Mesa.update(
              body,
              { where: { id: id } },
              { raw: true }
            );
            res
              .status(200)
              .send(`Table with ID ${id} updated: ${JSON.stringify(body, null, 2)}`);
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
          let table = await Mesa.findOne({ where: { id: id } });
          if (table === null) {
            return res.status(400).send("Bad request - Not found");
          } else {
            await Mesa.destroy({ where: { id: id } });
            res.status(200).send(`Table with ID ${id} deleted`);
          }
        } catch (error) {
          console.error(error);
          response.status(400).send(error);
        }
      },
};