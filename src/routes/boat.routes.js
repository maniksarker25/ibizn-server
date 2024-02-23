const express = require("express");
const auth = require("../config/auth");
const {
  createBoat,
  getBoats,
  deleteBoat,
  getApprovedBoats,
  getAllPendingBoats,
  updateBoat,
} = require("../controllers/boat.controllers");
const boatRoutes = express.Router();

boatRoutes.post("/create-boat", auth("operator"), createBoat);
boatRoutes.get("/", auth("operator"), getBoats);
boatRoutes.delete("/delete-boat/:id", auth("operator"), deleteBoat);
boatRoutes.get("/approved-boats", auth("admin"), getApprovedBoats);
boatRoutes.get("/pending-boats", auth("admin"), getAllPendingBoats);
boatRoutes.put("/update-boat/:id", auth("admin"), updateBoat);
module.exports = boatRoutes;
