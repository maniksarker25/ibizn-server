const Boat = require("../models/boat.model");

const createBoatIntoDB = async (userData, payload) => {
  const user = userData?.userId;
  const result = await Boat.create({ user, ...payload });
  return result;
};
// get boats for operators --------
const getBoatsFromDB = async (id) => {
  const result = await Boat.find({ user: id });
  return result;
};
// delete boat fromdb
const deleteBoatsFromDB = async (id) => {
  const result = await Boat.findByIdAndDelete(id);
  return result;
};

// get all approved boats from db
const getApprovedBoatsFromDB = async () => {
  const result = await Boat.find({ status: "approved" });
  return result;
};
// get all pending boats from db
const getAllPendingBoatsFromDB = async () => {
  const result = await Boat.find({ status: "pending" });
  return result;
};

// update boat
const updateBoatFromDB = async (id, payload) => {
  const result = await Boat.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};
module.exports = {
  createBoatIntoDB,
  getBoatsFromDB,
  deleteBoatsFromDB,
  getApprovedBoatsFromDB,
  getAllPendingBoatsFromDB,
  updateBoatFromDB,
};
