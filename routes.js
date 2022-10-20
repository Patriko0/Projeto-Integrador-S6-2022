const express = require("express");
const route = express.Router();

const paginaInicial = require("./src/controllers/homeController");
const bioEconomia = require("./src/controllers/bioEconomiaController");
const violencia = require("./src/controllers/violenciaController");
const saude = require("./src/controllers/saudeController");

route.get("/", paginaInicial.paginaInicial);
route.get("/BioEconomia", bioEconomia.paginaInicial);
route.get("/Violencia", violencia.paginaInicial);
route.get("/Saude", saude.paginaInicial);

module.exports = route;
