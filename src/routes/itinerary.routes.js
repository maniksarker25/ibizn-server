const express = require("express");
const auth = require("../config/auth");
const {
  createItinerary,
  getItineraries,
  deleteItinerary,
  getSingleItineraries,
  updateSingleItineraries,
} = require("../controllers/itinerary.controllers");
// just comments -------------
const itineraryRoutes = express.Router();

itineraryRoutes.post("/create-itinerary", auth("operator"), createItinerary);
itineraryRoutes.get("/", auth("operator"), getItineraries);
itineraryRoutes.get("/:id", auth("operator"), getSingleItineraries);
itineraryRoutes.put("/:id", auth("operator"), updateSingleItineraries);
itineraryRoutes.delete(
  "/delete-itinerary/:id",
  auth("operator"),
  deleteItinerary
);
module.exports = itineraryRoutes;
