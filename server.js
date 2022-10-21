const path = require("path");
require('dotenv').config()

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

const routes = require("./routes");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(routes);

app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}`);
});
