const ResortInclusion = require("../models/resortInclusion.model");

const createResortInclusionIntoDB = async (payload) => {
  const result = await ResortInclusion.create(payload);
  return result;
};

const getAllResortInclusionFromDB = async () => {
  const result = await ResortInclusion.find();
  return result;
};

// delete resort inclusion from db
const deleteResortInclusionFromDB = async (id) => {
  const result = await ResortInclusion.findByIdAndDelete(id);
  return result;
};

module.exports = {
  createResortInclusionIntoDB,
  getAllResortInclusionFromDB,
  deleteResortInclusionFromDB,
};
