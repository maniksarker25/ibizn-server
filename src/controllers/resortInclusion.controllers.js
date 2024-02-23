const httpStatus = require("http-status");

const catchAsync = require("../utilities/catchAsync");
const sendResponse = require("../utilities/sendResponse");
const {
  createResortInclusionIntoDB,
  getAllResortInclusionFromDB,
  deleteResortInclusionFromDB,
} = require("../services/resortInclusion.services");

const createResortInclusion = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await createResortInclusionIntoDB(payload);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Resort inclusion created successfully",
    data: result,
  });
});

const getAllResortInclusion = catchAsync(async (req, res) => {
  const result = await getAllResortInclusionFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Resort inclusions retrieved successfully",
    data: result,
  });
});

// delete facility from
const deleteResortInclusion = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await deleteResortInclusionFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Resort inclusion deleted successfully",
    data: result,
  });
});

module.exports = {
  createResortInclusion,
  getAllResortInclusion,
  deleteResortInclusion,
};
