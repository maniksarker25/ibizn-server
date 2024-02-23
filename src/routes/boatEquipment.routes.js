const express = require("express");

const auth = require("../config/auth");
const {
  createBoatEquipment,
  getAllBoatEquipment,
  deleteBoatEquipment,
} = require("../controllers/boatEquipment.controllers");

const boatEquipmentRoutes = express.Router();

boatEquipmentRoutes.post("/", auth("admin"), createBoatEquipment);
boatEquipmentRoutes.get("/", auth("admin", "operator"), getAllBoatEquipment);
boatEquipmentRoutes.delete("/:id", auth("admin"), deleteBoatEquipment);

module.exports = boatEquipmentRoutes;
