const express = require("express");
const {
  createFacility,
  getAllResortFacilities,
  deleteResortFacility,
} = require("../controllers/resortFacility.controllers");
const auth = require("../config/auth");
const resortFacilityRoutes = express.Router();

resortFacilityRoutes.post("/", auth("admin"), createFacility);
resortFacilityRoutes.get("/", getAllResortFacilities);
resortFacilityRoutes.delete("/:id", auth("admin"), deleteResortFacility);

module.exports = resortFacilityRoutes;
