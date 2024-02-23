const httpStatus = require("http-status");
const {
  createBankInformationIntoDB,
  updateBankInformationIntoDB,
  getSingleBankInformationFromDB,
} = require("../services/bankInformation.services");
const catchAsync = require("../utilities/catchAsync");
const sendResponse = require("../utilities/sendResponse");

const createBankInformation = catchAsync(async (req, res) => {
  const result = await createBankInformationIntoDB(req.user, req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Bank information created successfully",
    data: result,
  });
});
const getSingleBankInformation = catchAsync(async (req, res) => {
  const result = await getSingleBankInformationFromDB(req.user);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bank information retrieved successfully",
    data: result,
  });
});

// update bank information
const updateBankInformation = catchAsync(async (req, res) => {
  const result = await updateBankInformationIntoDB(req.user, req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Bank information updated successfully",
    data: result,
  });
});

module.exports = {
  createBankInformation,
  updateBankInformation,
  getSingleBankInformation,
};
