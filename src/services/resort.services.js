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

// delete resort fromdb
const deleteResortFromDB = async (id) => {
  const result = await Resort.findByIdAndDelete(id);
  return result;
};
// get all pending resorts from db
const getAllPendingResortFromDB = async () => {
  const result = await Resort.find({ status: "pending" });
  return result;
};
// get all approved resorts from db
const getAllApprovedResortFromDB = async () => {
  const result = await Resort.find({ status: "approved" });
  return result;
};
const updateResortFromDB = async (id, payload) => {
  const result = await Resort.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
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
};
