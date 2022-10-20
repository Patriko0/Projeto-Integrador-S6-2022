import path from "path";

import express from "express";
const app = express();

import { rotas } from "./routes";

app.use(rotas);

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.on("pronto", () => {
  app.listen(3000, () => {
    console.log("Servidor executando na porta 3000");
    console.log("Acessar http://localhost:3000");
  });
});
