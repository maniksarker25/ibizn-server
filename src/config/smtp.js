const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    //   TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "maniksarker265@gmail.com",
    pass: "vzvh yilq ixkg gvrz",
  },
});

module.exports = transporter;
