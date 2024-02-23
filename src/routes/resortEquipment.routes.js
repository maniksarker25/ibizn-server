const express = require("express");

const auth = require("../config/auth");
const {
  createResortEquipment,
  getAllResortEquipment,
  deleteResortEquipment,
} = require("../controllers/resortEquipment.controllers");

const resortEquipmentRoutes = express.Router();

resortEquipmentRoutes.post("/", auth("admin"), createResortEquipment);
resortEquipmentRoutes.get(
  "/",
  auth("admin", "operator"),
  getAllResortEquipment
);
resortEquipmentRoutes.delete("/:id", auth("admin"), deleteResortEquipment);

module.exports = resortEquipmentRoutes;
