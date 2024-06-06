const express = require("express");
const {
  createFacility,
  getAllResortFacilities,
  deleteResortFacility,
} = require("../controllers/resortFacility.controllers");
const auth = require("../config/auth");
const {
  createBoatFacility,
  getAllBoatFacility,
  deleteBoatFacility,
} = require("../controllers/boatFacility.controllers");
const boatFacilityRoutes = express.Router();

boatFacilityRoutes.post("/", auth("admin"), createBoatFacility);
boatFacilityRoutes.get("/", getAllBoatFacility);
boatFacilityRoutes.delete("/:id", auth("admin"), deleteBoatFacility);

module.exports = boatFacilityRoutes;
