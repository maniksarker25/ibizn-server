const httpStatus = require("http-status");
const sendResponse = require("../utilities/sendResponse");
const {
  createUserIntoDB,
  loginUserIntoDB,
  updateUserIntoDB,
  getSingleUser,
  getAllOperatorFromDB,
  restrictUserIntoDB,
  unRestrictUserIntoDB,
} = require("../services/user.services");
const User = require("../models/user.model");
const catchAsync = require("../utilities/catchAsync");
const transporter = require("../config/smtp");
const { generateToken } = require("../config/jwtConfig");
const createUser = catchAsync(async (req, res) => {
  const result = await createUserIntoDB(req.body);
  const mailer = await transporter.sendMail({
    from: "devsmanik@gmail.com", // sender address
    to: req?.body?.email, // list of receivers
    subject: "Email Verification", // Subject line
    text: "Verification", // plain text body
    html: `<div>
    <h1>Welcome to Infinite Blue</h1>
    <br/>
    <p>To verify your email please <a href=${
      "https://ibzn-latest.vercel.app/userVerification/" + generateToken(result)
    }>click here</a></p>
    </div>`, // html body
  });
  console.log(req.body.email, mailer);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Sign Up Successfully",
    data: result,
  });
});

const verifyUser = catchAsync(async (req, res) => {
  const id = req.user.userId;
  const result = await User.findByIdAndUpdate(
    id,
    { isValid: true },
    { new: true, runValidators: true }
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User verified Successfully",
    data: result,
  });
});

// login user -------
const loginUser = catchAsync(async (req, res) => {
  const result = await loginUserIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Login Successfully",
    data: result,
  });
});

// update user -------------------
const updateUser = catchAsync(async (req, res) => {
  const result = await updateUserIntoDB(req.user, req.body);
  console.log(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User updated successfully",
    data: result,
  });
});

// get single user -----------------------
const getSingeUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getSingleUser(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User retrieved successfully",
    data: result,
  });
});

// get al operator -------------------
const getAllOperator = catchAsync(async (req, res) => {
  const result = await getAllOperatorFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Operators retrieved successfully",
    data: result,
  });
});

// restrict user
const restrictUser = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await restrictUserIntoDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User restricted successfully",
    data: result,
  });
});
// unRestrict user
const unRestrictUser = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await unRestrictUserIntoDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User unRestricted successfully",
    data: result,
  });
});

module.exports = {
  createUser,
  loginUser,
  updateUser,
  getSingeUser,
  verifyUser,
  getAllOperator,
  restrictUser,
  unRestrictUser,
};
