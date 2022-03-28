// IMPORTANTE: el controlador USA el modelo. Hay que importarlo
const FacturaDet = require("../models/facturaDetModel");

// FUNDAMENTAL: definiciones del CRUD
module.exports = {
    getAll: async (req, res) => {
        try {
          let invDetails = await FacturaDet.findAll();
          res.status(200).send("Invoice details: " + JSON.stringify(invDetails, null, 2));
          console.debug("Invoice details: " + JSON.stringify(invDetails, null, 2));
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
            let created = await FacturaDet.create(body);
            res
              .status(200)
              .send(
                "Invoice detail inserted. Created: " + JSON.stringify(created, null, 2)
              );
            console.debug(
              "Invoice detail inserted. Created: " + JSON.stringify(created, null, 2)
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
          let invDetails = await FacturaDet.findOne(
            { where: { id: id } },
            { raw: true }
          );
          if (invDetails === null) {
            return res.status(400).send("Bad request - Not found");
          } else {
            res
              .status(200)
              .send(`Invoice detail with ID ${id} found: ${JSON.stringify(invDetails, null, 2)}`);
            console.debug(
              `Invoice detail with ID ${id} found: ${JSON.stringify(invDetails, null, 2)}`
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
          let invDetails = await FacturaDet.findOne({ where: { id: id } });
          if (invDetails === null) {
            return res.status(400).send("Bad request - Not found");
          } else {
            let updatedItem = await FacturaDet.update(
              body,
              { where: { id: id } },
              { raw: true }
            );
            res
              .status(200)
              .send(`Invoice detail with ID ${id} updated: ${JSON.stringify(body, null, 2)}`);
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
          let invDetails = await FacturaDet.findOne({ where: { id: id } });
          if (invDetails === null) {
            return res.status(400).send("Bad request - Not found");
          } else {
            await FacturaDet.destroy({ where: { id: id } });
            res.status(200).send(`Invoice detail with ID ${id} deleted`);
          }
        } catch (error) {
          console.error(error);
          response.status(400).send(error);
        }
      },
};