const httpStatus = require("http-status");
const {
  createResortIntoDB,
  getResortsFromDB,
  deleteResortFromDB,
  getAllPendingResortFromDB,
  getAllApprovedResortFromDB,
  updateResortFromDB,
  getSingleResotFromDB,
} = require("../services/resort.services");
const catchAsync = require("../utilities/catchAsync");
const sendResponse = require("../utilities/sendResponse");

const createResort = catchAsync(async (req, res) => {
  const result = await createResortIntoDB(req.user, req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Resort created successfully",
    data: result,
  });
});

// get resorts
const getResorts = catchAsync(async (req, res) => {
  const result = await getResortsFromDB(req.user?.userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Resorts are retrieved successfully",
    data: result,
  });
});

const getSingleResort = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getSingleResotFromDB(id)
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Resort is retrieved successfully",
    data: result,
  });
})

// delete resort
const deleteResort = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await deleteResortFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Resort deleted successfully",
    data: result,
  });
});
// get all pending resort
const getAllPendingResort = catchAsync(async (req, res) => {
  const result = await getAllPendingResortFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Pending resorts retrieved successfully",
    data: result,
  });
});
// get all approved resort
const getAllApprovedResort = catchAsync(async (req, res) => {
  const result = await getAllApprovedResortFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Approved resorts retrieved successfully",
    data: result,
  });
});

const updateResort = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await updateResortFromDB(id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Resort updated successfully",
    data: result,
  });
});

module.exports = {
  createResort,
  getResorts,
  deleteResort,
  getAllPendingResort,
  getAllApprovedResort,
  updateResort,
  getSingleResort
};
