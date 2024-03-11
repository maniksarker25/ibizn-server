const Resort = require("../models/resort.model");

const createResortIntoDB = async (userData, payload) => {
  const user = userData.userId;
  const result = await Resort.create({ user, ...payload });
  return result;
};

const getResortsFromDB = async (id) => {
  const result = await Resort.find({ user: id });
  return result;
};
// get single resort
const getSingleResotFromDB = async (id) => {
  const result = await Resort.findById(id, {
    carousalImages: false,
    rooms: false,
    food: false,
    diving: false,
    accommodation: false,
  });
  // console.log({result});
  return result;
};

// delete resort fromdb
const deleteResortFromDB = async (id) => {
  const result = await Resort.findByIdAndDelete(id);
  return result;
};
// get all pending resorts from db
const getAllPendingResortFromDB = async () => {
  const result = await Resort.find(
    { status: "pending" },
    { propertyName: true, status: true }
  );
  return result;
};
// get all approved resorts from db
const getAllApprovedResortFromDB = async () => {
  const result = await Resort.find(
    { status: "approved" },
    { carousalImages: false }
  );
  return result;
};
const updateResortFromDB = async (id, payload) => {
  const result = await Resort.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};
const updateSingleResortFromDB = async (id) => {
  const isExistResort = await Resort.findById(id);
  if (!isExistResort) {
    throw new AppError(httpStatus.NOT_FOUND, "resort not found");
  }
  const payload = {
    resitricted: isExistResort?.resitricted
      ? isExistResort?.resitricted === true
        ? false
        : true
      : true,
  };

  const result = await Resort.findByIdAndUpdate(id, payload, {
    new: true,
  });

  return result;
};
module.exports = {
  createResortIntoDB,
  getResortsFromDB,
  deleteResortFromDB,
  getAllPendingResortFromDB,
  getAllApprovedResortFromDB,
  updateResortFromDB,
  getSingleResotFromDB,
  updateSingleResortFromDB,
};
