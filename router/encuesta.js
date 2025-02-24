const express = require("express");
const api = express.Router();
const encuestaController = require("../controllers/encuesta");

const multiparty = require("connect-multiparty");
const md_upload = multiparty({ uploadDir: "./uploads/encuesta" });

api.get("/encuesta", encuestaController.getEncuestas);
api.get("/encuesta/:id", encuestaController.getEncuesta);
api.post("/encuesta", [md_upload], encuestaController.createEncuesta);
api.put("/encuesta/:id", [md_upload], encuestaController.updateEncuesta);
api.delete("/encuesta/:id", encuestaController.deleteEncuesta);

module.exports = api;
