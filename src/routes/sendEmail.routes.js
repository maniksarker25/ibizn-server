const express = require("express");
const {
  sendSignUpRequestEmail,
  sendContactUsRequestEmail,
} = require("../controllers/emailSend");
const sendEmailRoutes = express.Router();

sendEmailRoutes.post("/sign-up", sendSignUpRequestEmail);
sendEmailRoutes.post("/contact-us", sendContactUsRequestEmail);

module.exports = sendEmailRoutes;
