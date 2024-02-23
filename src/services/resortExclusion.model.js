const ResortExclusion = require("../models/resortExclusion.model");

const createResortExclusionIntoDB = async (payload) => {
  const result = await ResortExclusion.create(payload);
  return result;
};

const getAllResortExclusionFromDB = async () => {
  const result = await ResortExclusion.find();
  return result;
};

const deleteResortExclusionFromDB = async (id) => {
  const result = await ResortExclusion.findByIdAndDelete(id);
  return result;
};

module.exports = {
  createResortExclusionIntoDB,
  getAllResortExclusionFromDB,
  deleteResortExclusionFromDB,
};
