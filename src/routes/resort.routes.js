const express = require("express");
const auth = require("../config/auth");
const {
  createResort,
  getResorts,
  deleteResort,
  getAllPendingResort,
  getAllApprovedResort,
  updateResort,
  getSingleResort,
} = require("../controllers/resort.controllers");
const resortRoutes = express.Router();

resortRoutes.post("/create-resort", auth("operator"), createResort);
resortRoutes.get("/", auth("operator"), getResorts);
resortRoutes.get("/single-resort/:id",  getSingleResort);
resortRoutes.delete("/delete-resort/:id", auth("operator"), deleteResort);
resortRoutes.get("/pending-resorts", auth("admin"), getAllPendingResort);
resortRoutes.get("/approved-resorts", auth("admin"), getAllApprovedResort);
resortRoutes.put("/update-resort/:id", auth("admin"), updateResort);
module.exports = resortRoutes;
