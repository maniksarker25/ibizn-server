const httpStatus = require("http-status");
const {
  createFacilityIntoDB,
  getAllResortFacilityFromDB,
  deleteResortFacilityFromDB,
} = require("../services/resortFacility.services");
const catchAsync = require("../utilities/catchAsync");
const sendResponse = require("../utilities/sendResponse");

const createFacility = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await createFacilityIntoDB(payload);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Facility created successfully",
    data: result,
  });
});

const getAllResortFacilities = catchAsync(async (req, res) => {
  const result = await getAllResortFacilityFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Resort facilities retrieved successfully",
    data: result,
  });
});

const deleteResortFacility = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await deleteResortFacilityFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Resort facility deleted successfully",
    data: result,
  });
});

module.exports = {
  createFacility,
  getAllResortFacilities,
  deleteResortFacility,
};
