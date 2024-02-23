const express = require("express");
const auth = require("../config/auth");
const {
  createBankInformation,
  updateBankInformation,
  getSingleBankInformation,
} = require("../controllers/bankInformation.controllers");
const bankInformationRoutes = express.Router();

bankInformationRoutes.post("/", auth("operator"), createBankInformation);
bankInformationRoutes.get("/", auth("operator"), getSingleBankInformation);
bankInformationRoutes.put("/", auth("operator"), updateBankInformation);

module.exports = bankInformationRoutes;
