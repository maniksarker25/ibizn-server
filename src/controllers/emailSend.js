const httpStatus = require("http-status");
const catchAsync = require("../utilities/catchAsync");
const sendResponse = require("../utilities/sendResponse");
const transporter = require("../config/smtp");

const sendSignUpRequestEmail = catchAsync(async (req, res) => {
  const payload = req.body;
  const { name, email, message } = payload;
  console.log(email);
  // Creating the HTML email message
  const htmlMessage = `
      <div>
        <h1>New Sign Up Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      </div>
    `;

  // Sending the email
  const mailer = await transporter.sendMail({
    from: email,
    to: "maniksarker652@gmail.com", // list of receivers
    subject: "New Sign Up Request", // Subject line
    html: htmlMessage, // html body
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Email sent successfully",
    data: null,
  });
});

const sendContactUsRequestEmail = catchAsync(async (req, res) => {
  const payload = req.body;
  const { name, email, message } = payload;

  // Creating the HTML email message
  const htmlMessage = `
      <div>
        <h1>New Contact Us Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      </div>
    `;

  // Sending the email
  const mailer = await transporter.sendMail({
    from: email, // sender address
    to: "maniksarker.official@gmail.com", // list of receivers
    subject: "New Contact Us Request", // Subject line
    html: htmlMessage, // html body
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Email sent successfully",
    data: null,
  });
});

module.exports = { sendSignUpRequestEmail, sendContactUsRequestEmail };
