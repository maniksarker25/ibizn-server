const express = require("express");

const auth = require("../config/auth");
const {
  createBoatDiveCourse,
  getAllBoatDiveCourse,
  deleteBoatDiveCourse,
} = require("../controllers/boatDiveCourse.controllers");

const boatDiveCourseRoutes = express.Router();

boatDiveCourseRoutes.post("/", auth("admin"), createBoatDiveCourse);
boatDiveCourseRoutes.get("/", auth("admin", "operator"), getAllBoatDiveCourse);
boatDiveCourseRoutes.delete("/:id", auth("admin"), deleteBoatDiveCourse);

module.exports = boatDiveCourseRoutes;
