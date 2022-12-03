const express = require("express");
const route = express.Router();

const paginaInicial = require("./src/controllers/homeController");
const bioEconomia = require("./src/controllers/bioEconomiaController");
const violencia = require("./src/controllers/violenciaController");
const saude = require("./src/controllers/saudeController");
const glossario = require("./src/controllers/glossarioController");
const apoio = require("./src/controllers/apoioController");
const infografico = require("./src/controllers/infograficoController");
const refs = require("./src/controllers/refsController");


route.get("/", paginaInicial.paginaInicial);
route.get("/BioEconomia", bioEconomia.paginaInicial);
route.get("/Violencia", violencia.paginaInicial);
route.get("/Saude", saude.paginaInicial);
route.get("/Apoio", apoio.paginaInicial);
route.get("/Infografico", infografico.paginaInicial);
route.get("/Referencias", refs.paginaInicial);
route.get("/Glossario", glossario.paginaInicial);



module.exports = route;
