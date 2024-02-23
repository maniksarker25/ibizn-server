const express = require("express");

const auth = require("../config/auth");

const {
  createBoatInclusion,
  getAllBoatInclusion,
  deleteBoatInclusion,
} = require("../controllers/boatInclusion.controllers");
const boatInclusionRoutes = express.Router();

boatInclusionRoutes.post("/", auth("admin"), createBoatInclusion);
boatInclusionRoutes.get("/", auth("admin", "operator"), getAllBoatInclusion);
boatInclusionRoutes.delete("/:id", auth("admin"), deleteBoatInclusion);
module.exports = boatInclusionRoutes;
