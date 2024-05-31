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
  updateSingleResort,
  getResortSearchItem,
  getAllResort,
} = require("../controllers/resort.controllers");
const resortRoutes = express.Router();

resortRoutes.post("/create-resort", auth("operator"), createResort);
resortRoutes.get("/all-resorts", getAllResort);
resortRoutes.get("/", auth("operator"), getResorts);
resortRoutes.get("/search-item", getResortSearchItem);
resortRoutes.get("/single-resort/:id", getSingleResort);
resortRoutes.delete("/delete-resort/:id", auth("operator"), deleteResort);
resortRoutes.get("/pending-resorts", auth("admin"), getAllPendingResort);
resortRoutes.get("/approved-resorts", auth("admin"), getAllApprovedResort);
resortRoutes.put("/update-resort/:id", auth("admin", "operator"), updateResort);
resortRoutes.put(
  "/update-single-resort/:id",
  auth("admin"),
  updateSingleResort
);
module.exports = resortRoutes;
