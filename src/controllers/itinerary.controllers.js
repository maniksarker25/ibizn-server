const httpStatus = require("http-status");
const {
  createItineraryIntoDB,
  getItinerariesFromDB,
  deleteItineraryFromDB,
  getSingleIteneryFromDB,
  updateSingleIteneryFromDB,
} = require("../services/itinerary.services");
const catchAsync = require("../utilities/catchAsync");
const sendResponse = require("../utilities/sendResponse");

const createItinerary = catchAsync(async (req, res) => {
  const result = await createItineraryIntoDB(req.user, req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Itinerary created successfully",
    data: result,
  });
});

// get all itinerary for operator -----
const getItineraries = catchAsync(async (req, res) => {
  const result = await getItinerariesFromDB(req.user?.userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Itineraries are retrieved successfully",
    data: result,
  });
});
// get all itinerary for operator -----
const getSingleItineraries = catchAsync(async (req, res) => {
  const result = await getSingleIteneryFromDB(req.params?.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Itineraries is retrieved successfully",
    data: result,
  });
});
// update  itinerary for operator -----
const updateSingleItineraries = catchAsync(async (req, res) => {
  const result = await updateSingleIteneryFromDB(req.params?.id,req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Itineraries is update successfully",
    data: result,
  });
});

// delete itinerary
const deleteItinerary = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await deleteItineraryFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Itinerary deleted successfully",
    data: result,
  });
});

module.exports = { createItinerary, getItineraries, deleteItinerary ,getSingleItineraries,updateSingleItineraries};
