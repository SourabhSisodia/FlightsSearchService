const express = require("express");

const { InfoController } = require("../../controllers");
const { CityController } = require("../../controllers");

const router = express.Router();

router.get("/info", InfoController.info);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.patch("/city/:id", CityController.update);

module.exports = router;
