const BoatInclusion = require("../models/boatInclusion.model");

const createBoatInclusionIntoDB = async (payload) => {
  const result = await BoatInclusion.create(payload);
  return result;
};

const getAllBoatInclusionFromDB = async () => {
  const result = await BoatInclusion.find();
  return result;
};

// delete resort inclusion from db
const deleteBoatInclusionFromDB = async (id) => {
  const result = await BoatInclusion.findByIdAndDelete(id);
  return result;
};

module.exports = {
  createBoatInclusionIntoDB,
  getAllBoatInclusionFromDB,
  deleteBoatInclusionFromDB,
};
