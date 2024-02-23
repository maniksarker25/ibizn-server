const httpStatus = require("http-status");

const catchAsync = require("../utilities/catchAsync");
const sendResponse = require("../utilities/sendResponse");
const {
  createBoatInclusionIntoDB,
  getAllBoatInclusionFromDB,
  deleteBoatInclusionFromDB,
} = require("../services/boatInclusion.services");

const createBoatInclusion = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await createBoatInclusionIntoDB(payload);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Boat inclusion created successfully",
    data: result,
  });
});

const getAllBoatInclusion = catchAsync(async (req, res) => {
  const result = await getAllBoatInclusionFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Boat inclusions retrieved successfully",
    data: result,
  });
});

// delete facility from
const deleteBoatInclusion = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await deleteBoatInclusionFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Boat inclusion deleted successfully",
    data: result,
  });
});

module.exports = {
  createBoatInclusion,
  getAllBoatInclusion,
  deleteBoatInclusion,
};
