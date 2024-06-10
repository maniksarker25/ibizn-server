const nodemailer = require("nodemailer");
const config = require(".");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  service: "gmail",
  auth: {
    //   TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: config.smtp_user,
    pass: config.smtp_pass,
  },
});

module.exports = transporter;
