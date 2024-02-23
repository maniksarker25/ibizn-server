const httpStatus = require("http-status");

const catchAsync = require("../utilities/catchAsync");
const sendResponse = require("../utilities/sendResponse");
const {
  createResortInclusionIntoDB,
  getAllResortInclusionFromDB,
} = require("../services/resortInclusion.services");
const {
  createResortExclusionIntoDB,
  getAllResortExclusionFromDB,
  deleteResortExclusionFromDB,
} = require("../services/resortExclusion.model");

const createResortExclusion = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await createResortExclusionIntoDB(payload);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Resort exclusion created successfully",
    data: result,
  });
});

const getAllResortExclusion = catchAsync(async (req, res) => {
  const result = await getAllResortExclusionFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Resort exclusions retrieved successfully",
    data: result,
  });
});

const deleteResortExclusion = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await deleteResortExclusionFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Resort Exclusion deleted successfully",
    data: result,
  });
});
module.exports = {
  createResortExclusion,
  getAllResortExclusion,
  deleteResortExclusion,
};
