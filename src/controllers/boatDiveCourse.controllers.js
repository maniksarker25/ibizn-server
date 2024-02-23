const httpStatus = require("http-status");

const catchAsync = require("../utilities/catchAsync");
const sendResponse = require("../utilities/sendResponse");
const {
  createBoatDiveCourseIntoDB,
  getAllBoatDiveCourseFromDB,
  deleteBoatDiveCourseFromDB,
} = require("../services/boatDiveCourse.services");

const createBoatDiveCourse = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await createBoatDiveCourseIntoDB(payload);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Boat dive course created successfully",
    data: result,
  });
});

const getAllBoatDiveCourse = catchAsync(async (req, res) => {
  const result = await getAllBoatDiveCourseFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Boat dive courses retrieved successfully",
    data: result,
  });
});

const deleteBoatDiveCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await deleteBoatDiveCourseFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Boat Dive course deleted successfully",
    data: result,
  });
});

module.exports = {
  createBoatDiveCourse,
  getAllBoatDiveCourse,
  deleteBoatDiveCourse,
};
