const express = require("express");
const bodyParser = require("body-parser");
const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");

const app = express();

app.listen(ServerConfig.PORT, () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);

  console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
