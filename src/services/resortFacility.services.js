const ResortFacility = require("../models/resortFacility.model");

const createFacilityIntoDB = async (payload) => {
  const result = await ResortFacility.create(payload);
  return result;
};

// get all resort facilities from db
const getAllResortFacilityFromDB = async () => {
  const result = await ResortFacility.find();
  return result;
};

// delete facility from db
const deleteResortFacilityFromDB = async (id) => {
  const result = await ResortFacility.findByIdAndDelete(id);
  return result;
};

module.exports = {
  createFacilityIntoDB,
  getAllResortFacilityFromDB,
  deleteResortFacilityFromDB,
};
