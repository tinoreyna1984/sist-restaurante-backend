// IMPORTANTE: el controlador USA el modelo. Hay que importarlo
const FacturaCab = require("../models/facturaCabModel");

// FUNDAMENTAL: definiciones del CRUD
module.exports = {
    getAll: async (req, res) => {
        try {
          let invHeaders = await FacturaCab.findAll();
          //res.status(200).send("Invoice headers: " + JSON.stringify(invHeaders, null, 2));
          res.json(invHeaders);
          console.debug("Invoice headers: " + JSON.stringify(invHeaders, null, 2));
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
            let created = await FacturaCab.create(body);
            res
              .status(200)
              .send(
                "Invoice header inserted. Created: " + JSON.stringify(created, null, 2)
              );
            console.debug(
              "Invoice header inserted. Created: " + JSON.stringify(created, null, 2)
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
          let invHeaders = await FacturaCab.findOne(
            { where: { id: id } },
            { raw: true }
          );
          if (invHeaders === null) {
            return res.status(400).send("Bad request - Not found");
          } else {
            /* res
              .status(200)
              .send(`Invoice header with ID ${id} found: ${JSON.stringify(invHeaders, null, 2)}`); */
            res.json(invHeaders);
            console.debug(
              `Invoice header with ID ${id} found: ${JSON.stringify(invHeaders, null, 2)}`
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
          let invHeaders = await FacturaCab.findOne({ where: { id: id } });
          if (invHeaders === null) {
            return res.status(400).send("Bad request - Not found");
          } else {
            let updatedItem = await FacturaCab.update(
              body,
              { where: { id: id } },
              { raw: true }
            );
            res
              .status(200)
              .send(`Invoice header with ID ${id} updated: ${JSON.stringify(body, null, 2)}`);
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
          let invHeaders = await FacturaCab.findOne({ where: { id: id } });
          if (invHeaders === null) {
            return res.status(400).send("Bad request - Not found");
          } else {
            await FacturaCab.destroy({ where: { id: id } });
            res.status(200).send(`Invoice header with ID ${id} deleted`);
          }
        } catch (error) {
          console.error(error);
          response.status(400).send(error);
        }
      },
};