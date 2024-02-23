const BoatExclusion = require("../models/boatExclusion.model");

const createBoatExclusionIntoDB = async (payload) => {
  const result = await BoatExclusion.create(payload);
  return result;
};

const getAllBoatExclusionFromDB = async () => {
  const result = await BoatExclusion.find();
  return result;
};

const deleteBoatExclusionFromDB = async (id) => {
  const result = await BoatExclusion.findByIdAndDelete(id);
  return result;
};

module.exports = {
  createBoatExclusionIntoDB,
  getAllBoatExclusionFromDB,
  deleteBoatExclusionFromDB,
};
