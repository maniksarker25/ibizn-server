const express = require("express");

const auth = require("../config/auth");
const {
  createBoatExclusion,
  getAllBoatExclusion,
  deleteBoatExclusion,
} = require("../controllers/boatExclusion.controllers");

const boatExclusionRoutes = express.Router();

boatExclusionRoutes.post("/", auth("admin"), createBoatExclusion);
boatExclusionRoutes.get("/", auth("admin", "operator"), getAllBoatExclusion);
boatExclusionRoutes.delete("/:id", auth("admin"), deleteBoatExclusion);

module.exports = boatExclusionRoutes;
