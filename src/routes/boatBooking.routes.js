const express = require("express");
const {
  createBoatBooking,

  getSingleBoatBooking,
  updateBooking,
  updateBookingStatusByAdmin,
  getAllPendingBooking,
  updateBookingStatusByOperator,
  getAllConfirmBoatOrder,
} = require("../controllers/boatBooking.controllers");
const auth = require("../config/auth");

const boatBookingRoutes = express.Router();

boatBookingRoutes.post("/", createBoatBooking);
boatBookingRoutes.get(
  "/pending-booking",
  auth("admin", "operator"),
  getAllPendingBooking
);
boatBookingRoutes.get(
  "/confirm-booking",
  auth("admin", "operator"),
  getAllConfirmBoatOrder
);
boatBookingRoutes.get("/:id", auth("admin", "operator"), getSingleBoatBooking);
boatBookingRoutes.patch("/update-booking/:id", auth("admin"), updateBooking);
boatBookingRoutes.patch(
  "/update-status-by-admin/:id",
  auth("admin"),
  updateBookingStatusByAdmin
);
boatBookingRoutes.patch(
  "/update-status-by-operator/:id",
  auth("operator"),
  updateBookingStatusByOperator
);

module.exports = boatBookingRoutes;
