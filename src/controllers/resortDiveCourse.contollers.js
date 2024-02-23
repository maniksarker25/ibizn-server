const httpStatus = require("http-status");

const catchAsync = require("../utilities/catchAsync");
const sendResponse = require("../utilities/sendResponse");
const {
  createResortDiveCourseIntoDB,
  getAllResortDiveCourseFromDB,
  deleteResortDiveCourseFromDB,
} = require("../services/resortDiveCourse.services");

const createResortDiveCourse = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await createResortDiveCourseIntoDB(payload);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Resort dive course created successfully",
    data: result,
  });
});

const getAllResortDiveCourse = catchAsync(async (req, res) => {
  const result = await getAllResortDiveCourseFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Resort dive courses retrieved successfully",
    data: result,
  });
});

const deleteResortDiveCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await deleteResortDiveCourseFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Resort Dive course deleted successfully",
    data: result,
  });
});

module.exports = {
  createResortDiveCourse,
  getAllResortDiveCourse,
  deleteResortDiveCourse,
};
