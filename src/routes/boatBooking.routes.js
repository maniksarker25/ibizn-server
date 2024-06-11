const express = require("express");
const {
  createBoatBooking,
  getAllBoatBooking,
  getSingleBoatBooking,
  updateBooking,
  updateBookingStatusByAdmin,
} = require("../controllers/boatBooking.controllers");
const auth = require("../config/auth");

const boatBookingRoutes = express.Router();

boatBookingRoutes.post("/", createBoatBooking);
boatBookingRoutes.get("/pending-booking", auth("admin"), getAllBoatBooking);
boatBookingRoutes.get("/:id", auth("admin", "operator"), getSingleBoatBooking);
boatBookingRoutes.patch("/update-booking/:id", auth("admin"), updateBooking);
boatBookingRoutes.patch(
  "/update-status-by-admin/:id",
  auth("admin"),
  updateBookingStatusByAdmin
);

module.exports = boatBookingRoutes;
