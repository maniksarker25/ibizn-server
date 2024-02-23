const httpStatus = require("http-status");

const catchAsync = require("../utilities/catchAsync");
const sendResponse = require("../utilities/sendResponse");
const {
  createBoatExclusionIntoDB,
  getAllBoatExclusionFromDB,
  deleteBoatExclusionFromDB,
} = require("../services/boatExclusion.services");
const {
  deleteResortExclusionFromDB,
} = require("../services/resortExclusion.model");

const createBoatExclusion = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await createBoatExclusionIntoDB(payload);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Boat exclusion created successfully",
    data: result,
  });
});

const getAllBoatExclusion = catchAsync(async (req, res) => {
  const result = await getAllBoatExclusionFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Boat exclusions retrieved successfully",
    data: result,
  });
});

const deleteBoatExclusion = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await deleteBoatExclusionFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Resort Exclusion deleted successfully",
    data: result,
  });
});
module.exports = {
  createBoatExclusion,
  getAllBoatExclusion,
  deleteBoatExclusion,
};
