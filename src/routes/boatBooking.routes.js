const express = require("express");
const {
  createBoatBooking,
  getAllBoatBooking,
  getSingleBoatBooking,
  updateBooking,
} = require("../controllers/boatBooking.controllers");
const auth = require("../config/auth");

const boatBookingRoutes = express.Router();

boatBookingRoutes.post("/", createBoatBooking);
boatBookingRoutes.get("/pending-booking", auth("admin"), getAllBoatBooking);
boatBookingRoutes.get("/:id", auth("admin", "operator"), getSingleBoatBooking);
boatBookingRoutes.patch("/update-booking/:id", auth("admin"), updateBooking);

module.exports = boatBookingRoutes;
