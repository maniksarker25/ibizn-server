const ResortEquipment = require("../models/resortEquipment.model");

const createResortEquipmentIntoDB = async (payload) => {
  const result = await ResortEquipment.create(payload);
  return result;
};

const getAllResortEquipmentFromDB = async () => {
  const result = await ResortEquipment.find();
  return result;
};

const deleteResortEquipmentFromDB = async (id) => {
  const result = await ResortEquipment.findByIdAndDelete(id);
  return result;
};

module.exports = {
  createResortEquipmentIntoDB,
  getAllResortEquipmentFromDB,
  deleteResortEquipmentFromDB,
};
