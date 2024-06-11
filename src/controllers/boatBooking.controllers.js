const httpStatus = require("http-status");
const {
  createBoatBookingIntoDB,
  getAllBoatBookingFromDB,
  getAllPendingBoatBookingFromDB,
  getSingleBoatBookingFromDB,
  updateBookingIntoDB,
} = require("../services/boatBooking.services");
const catchAsync = require("../utilities/catchAsync");
const sendResponse = require("../utilities/sendResponse");

const createBoatBooking = catchAsync(async (req, res) => {
  const result = await createBoatBookingIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Boat booking created successfully",
    data: result,
  });
});
const getAllBoatBooking = catchAsync(async (req, res) => {
  const result = await getAllPendingBoatBookingFromDB(req.user);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Boat booking retrieved successfully",
    data: result,
  });
});

const getSingleBoatBooking = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await getSingleBoatBookingFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Boat booking retrieved successfully",
    data: result,
  });
});
const updateBooking = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await updateBookingIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking updated successfully",
    data: result,
  });
});

module.exports = {
  createBoatBooking,
  getAllBoatBooking,
  getSingleBoatBooking,
  updateBooking,
};
