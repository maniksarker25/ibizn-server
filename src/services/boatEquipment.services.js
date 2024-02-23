const BoatEquipment = require("../models/boatEquipment.model");

const createBoatEquipmentIntoDB = async (payload) => {
  const result = await BoatEquipment.create(payload);
  return result;
};

const getAllBoatEquipmentFormDB = async () => {
  const result = await BoatEquipment.find();
  return result;
};

const deleteBoatEquipmentFromDB = async (id) => {
  const result = await BoatEquipment.findByIdAndDelete(id);
  return result;
};

module.exports = {
  createBoatEquipmentIntoDB,
  getAllBoatEquipmentFormDB,
  deleteBoatEquipmentFromDB,
};
