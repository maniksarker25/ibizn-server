const Itinerary = require("../models/itenary.model");

const createItineraryIntoDB = async (userData, payload) => {
  const user = userData?.userId;
  const result = Itinerary.create({ user, ...payload });
  return result;
};

// get itineraries from db -
const getItinerariesFromDB = async (id) => {
  const result = await Itinerary.find({ user: id });
  return result;
};

// get Single itenery from db
const getSingleIteneryFromDB = async (id) => {
  const result = await Itinerary.findById(id);
  return result;
}
// update Single itenery from db
const updateSingleIteneryFromDB = async (id,payload) => {
  const result = await Itinerary.findByIdAndUpdate(id, payload,{new :true});
  return result;
}

// delete itineraries fromdb
const deleteItineraryFromDB = async (id) => {
  const result = await Itinerary.findByIdAndDelete(id);
  return result;
};

module.exports = {
  createItineraryIntoDB,
  getItinerariesFromDB,
  deleteItineraryFromDB,
  getSingleIteneryFromDB,
  updateSingleIteneryFromDB
};
