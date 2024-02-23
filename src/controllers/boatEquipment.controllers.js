const httpStatus = require("http-status");

const catchAsync = require("../utilities/catchAsync");
const sendResponse = require("../utilities/sendResponse");
const {
  createBoatEquipmentIntoDB,
  deleteBoatEquipmentFromDB,
  getAllBoatEquipmentFormDB,
} = require("../services/boatEquipment.services");

const createBoatEquipment = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await createBoatEquipmentIntoDB(payload);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Boat equipment created successfully",
    data: result,
  });
});

const deleteBoatEquipment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await deleteBoatEquipmentFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Boat Equipment deleted successfully",
    data: result,
  });
});

const getAllBoatEquipment = catchAsync(async (req, res) => {
  const result = await getAllBoatEquipmentFormDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Boat equipment retrieved successfully",
    data: result,
  });
});

module.exports = {
  createBoatEquipment,
  getAllBoatEquipment,
  deleteBoatEquipment,
};
