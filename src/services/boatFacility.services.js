const BoatFacility = require("../models/boatFaculty.model");

const createBoatFacilityIntoDB = async (payload) => {
  const result = await BoatFacility.create(payload);
  return result;
};

// get all boat facilities from db
const getAllBoatFacilityFromDB = async () => {
  const result = await BoatFacility.find();
  return result;
};

// delete facility from db
const deleteBoatFacilityFromDB = async (id) => {
  const result = await BoatFacility.findByIdAndDelete(id);
  return result;
};

module.exports = {
  createBoatFacilityIntoDB,
  getAllBoatFacilityFromDB,
  deleteBoatFacilityFromDB,
};
