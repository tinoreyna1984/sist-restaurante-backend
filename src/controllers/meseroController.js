// IMPORTANTE: el controlador USA el modelo. Hay que importarlo
const Mesero = require("../models/meseroModel");

// FUNDAMENTAL: definiciones del CRUD
module.exports = {
    getAll: async (req, res) => {
        try {
          let waiters = await Mesero.findAll();
          //res.status(200).send("Waiters: " + JSON.stringify(waiters, null, 2));
          res.json(waiters);
          console.debug("Waiters: " + JSON.stringify(waiters, null, 2));
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
            let created = await Mesero.create(body);
            res
              .status(200)
              .send(
                "Waiter inserted. Created: " + JSON.stringify(created, null, 2)
              );
            console.debug(
              "Waiter inserted. Created: " + JSON.stringify(created, null, 2)
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
          let waiter = await Mesero.findOne(
            { where: { id: id } },
            { raw: true }
          );
          if (waiter === null) {
            return res.status(400).send("Bad request - Not found");
          } else {
            /* res
              .status(200)
              .send(`Waiter with ID ${id} found: ${JSON.stringify(waiter, null, 2)}`); */
            res.json(waiter);
            console.debug(
              `Waiter with ID ${id} found: ${JSON.stringify(waiter, null, 2)}`
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
          let waiters = await Mesero.findOne({ where: { id: id } });
          if (waiters === null) {
            return res.status(400).send("Bad request - Not found");
          } else {
            let updatedItem = await Mesero.update(
              body,
              { where: { id: id } },
              { raw: true }
            );
            res
              .status(200)
              .send(`Waiter with ID ${id} updated: ${JSON.stringify(body, null, 2)}`);
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
          let waiters = await Mesero.findOne({ where: { id: id } });
          if (waiters === null) {
            return res.status(400).send("Bad request - Not found");
          } else {
            await Mesero.destroy({ where: { id: id } });
            res.status(200).send(`Waiter with ID ${id} deleted`);
          }
        } catch (error) {
          console.error(error);
          response.status(400).send(error);
        }
      },
};