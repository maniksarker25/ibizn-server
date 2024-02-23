const express = require("express");
const auth = require("../config/auth");
const {
  createPackage,
  getAllPackage,
  deletePackage,
} = require("../controllers/package.controllers");

const packageRoutes = express.Router();

packageRoutes.post("/create-package", auth("operator"), createPackage);
packageRoutes.get("/", auth("operator", "admin"), getAllPackage);
packageRoutes.delete("/delete-package/:id", auth("operator"), deletePackage);
module.exports = packageRoutes;
