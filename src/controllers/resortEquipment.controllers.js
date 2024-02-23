const httpStatus = require("http-status");

const catchAsync = require("../utilities/catchAsync");
const sendResponse = require("../utilities/sendResponse");
const {
  createResortEquipmentIntoDB,
  getAllResortEquipmentFromDB,
  deleteResortEquipmentFromDB,
} = require("../services/resortEquipment.services");

const createResortEquipment = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await createResortEquipmentIntoDB(payload);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Resort equipment created successfully",
    data: result,
  });
});

const deleteResortEquipment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await deleteResortEquipmentFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Resort Equipment deleted successfully",
    data: result,
  });
});

const getAllResortEquipment = catchAsync(async (req, res) => {
  const result = await getAllResortEquipmentFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Resort equipment retrieved successfully",
    data: result,
  });
});

module.exports = {
  createResortEquipment,
  getAllResortEquipment,
  deleteResortEquipment,
};
