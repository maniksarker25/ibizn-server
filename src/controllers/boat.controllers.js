const httpStatus = require("http-status");
const {
  createBoatIntoDB,
  getBoatsFromDB,
  deleteBoatsFromDB,
  getApprovedBoatsFromDB,
  getAllPendingBoatsFromDB,
  updateBoatFromDB,
  getSingleBoatFromDB,
  updateSingleBoatFromDB,
  getAllBoatFromDB,
  getBoatSearchItemFromDB,
} = require("../services/boat.services");
const catchAsync = require("../utilities/catchAsync");
const sendResponse = require("../utilities/sendResponse");

const createBoat = catchAsync(async (req, res) => {
  const result = await createBoatIntoDB(req.user, req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Boat created successfully",
    data: result,
  });
});

// get all boats
const getAllBoat = catchAsync(async (req, res) => {
  const query = req.query;
  const result = await getAllBoatFromDB(query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Boat retrieved successfully",
    data: result,
  });
});

// get boats
const getBoats = catchAsync(async (req, res) => {
  const result = await getBoatsFromDB(req.user?.userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Boats are retrieved successfully",
    data: result,
  });
});

// get boat search item
const getBoatSearchItem = catchAsync(async (req, res) => {
  const result = await getBoatSearchItemFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Boats search item retrieved successfully",
    data: result,
  });
});

// delete boat
const deleteBoat = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await deleteBoatsFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Boat deleted successfully",
    data: result,
  });
});
// get all approved boats -------------------------------------
const getApprovedBoats = catchAsync(async (req, res) => {
  const result = await getApprovedBoatsFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Approved boats retrieved successfully",
    data: result,
  });
});

// get all pending boats
const getAllPendingBoats = catchAsync(async (req, res) => {
  const result = await getAllPendingBoatsFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Pending boats retrieved successfully",
    data: result,
  });
});
// get single boats
const getSingleBoat = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getSingleBoatFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "boats is retrieved successfully",
    data: result,
  });
});
// update boat
const updateBoat = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await updateBoatFromDB(id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Boat updated successfully",
    data: result,
  });
});

// resitricted / unrestricted
const updateSingleBoat = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await updateSingleBoatFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Boat updated successfully",
    data: result,
  });
});

module.exports = {
  createBoat,
  getAllBoat,
  getBoats,
  getBoatSearchItem,
  deleteBoat,
  getApprovedBoats,
  getAllPendingBoats,
  updateBoat,
  getSingleBoat,
  updateSingleBoat,
};
