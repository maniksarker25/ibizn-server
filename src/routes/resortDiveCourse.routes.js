const express = require("express");

const auth = require("../config/auth");
const {
  createResortDiveCourse,
  getAllResortDiveCourse,
  deleteResortDiveCourse,
} = require("../controllers/resortDiveCourse.contollers");

const resortDiveCourseRoutes = express.Router();

resortDiveCourseRoutes.post("/", auth("admin"), createResortDiveCourse);
resortDiveCourseRoutes.get(
  "/",
  auth("admin", "operator"),
  getAllResortDiveCourse
);
resortDiveCourseRoutes.delete("/:id", auth("admin"), deleteResortDiveCourse);

module.exports = resortDiveCourseRoutes;
