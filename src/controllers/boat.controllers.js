const httpStatus = require("http-status");
const {
  createBoatIntoDB,
  getBoatsFromDB,
  deleteBoatsFromDB,
  getApprovedBoatsFromDB,
  getAllPendingBoatsFromDB,
  updateBoatFromDB,
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
module.exports = {
  createBoat,
  getBoats,
  deleteBoat,
  getApprovedBoats,
  getAllPendingBoats,
  updateBoat,
};
