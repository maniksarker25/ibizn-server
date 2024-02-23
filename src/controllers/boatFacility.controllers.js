const httpStatus = require("http-status");

const catchAsync = require("../utilities/catchAsync");
const sendResponse = require("../utilities/sendResponse");
const {
  createBoatFacultyIntoDB,
  createBoatFacilityIntoDB,
  getAllBoatFacilityFromDB,
  deleteBoatFacilityFromDB,
} = require("../services/boatFacility.services");

const createBoatFacility = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await createBoatFacilityIntoDB(payload);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Facility created successfully",
    data: result,
  });
});

const getAllBoatFacility = catchAsync(async (req, res) => {
  const result = await getAllBoatFacilityFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Boat facilities retrieved successfully",
    data: result,
  });
});

const deleteBoatFacility = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await deleteBoatFacilityFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Boat facility deleted successfully",
    data: result,
  });
});

module.exports = {
  createBoatFacility,
  getAllBoatFacility,
  deleteBoatFacility,
};
