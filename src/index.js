const express = require("express");
const bodyParser = require("body-parser");
const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");
const db = require("./models/index");

const setupAndStartServer = async () => {
  const app = express();

  app.listen(ServerConfig.PORT, () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use("/api", apiRoutes);

    console.log(
      `Successfully started the server on PORT : ${ServerConfig.PORT}`
    );
    if (process.env.SYNC_DB) {
      db.sequelize.sync({ alter: true });
    }
  });
};
setupAndStartServer();
