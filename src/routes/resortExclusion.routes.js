const express = require("express");

const auth = require("../config/auth");
const {
  createResortExclusion,
  getAllResortExclusion,
  deleteResortExclusion,
} = require("../controllers/resortExclusion.controllers");

const resortExclusionRoutes = express.Router();

resortExclusionRoutes.post("/", auth("admin"), createResortExclusion);
resortExclusionRoutes.get(
  "/",
  auth("admin", "operator"),
  getAllResortExclusion
);
resortExclusionRoutes.delete("/:id", auth("admin"), deleteResortExclusion);

module.exports = resortExclusionRoutes;
