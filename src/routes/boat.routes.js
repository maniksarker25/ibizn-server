const express = require("express");
const auth = require("../config/auth");
const {
  createBoat,
  getBoats,
  deleteBoat,
  getApprovedBoats,
  getAllPendingBoats,
  updateBoat,
  getSingleBoat,
  updateSingleBoat,
  getAllBoat,
  getBoatSearchItem,
} = require("../controllers/boat.controllers");
const boatRoutes = express.Router();
//some changes
boatRoutes.post("/create-boat", auth("operator"), createBoat);
boatRoutes.get("/all-boats", getAllBoat);
boatRoutes.get("/", auth("operator"), getBoats);
boatRoutes.get("/search-item", getBoatSearchItem);
boatRoutes.delete("/delete-boat/:id", auth("operator"), deleteBoat);
boatRoutes.get("/approved-boats", auth("admin"), getApprovedBoats);
boatRoutes.get("/pending-boats", auth("admin"), getAllPendingBoats);
boatRoutes.get("/single-boat/:id", getSingleBoat);
boatRoutes.put("/update-boat/:id", auth("admin", "operator"), updateBoat);
boatRoutes.put("/update-single-boat/:id", auth("admin"), updateSingleBoat);
module.exports = boatRoutes;
