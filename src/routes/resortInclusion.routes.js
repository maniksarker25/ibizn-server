const express = require("express");

const auth = require("../config/auth");
const {
  createResortInclusion,
  getAllResortInclusion,
  deleteResortInclusion,
} = require("../controllers/resortInclusion.controllers");
const resortInclusionRoutes = express.Router();

resortInclusionRoutes.post("/", auth("admin"), createResortInclusion);
resortInclusionRoutes.get(
  "/",
  auth("admin", "operator"),
  getAllResortInclusion
);
resortInclusionRoutes.delete("/:id", auth("admin"), deleteResortInclusion);
module.exports = resortInclusionRoutes;
