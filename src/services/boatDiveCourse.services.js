const BoatDiveCourse = require("../models/boatDiveCourse.model");

const createBoatDiveCourseIntoDB = async (payload) => {
  const result = await BoatDiveCourse.create(payload);
  return result;
};

const getAllBoatDiveCourseFromDB = async () => {
  const result = await BoatDiveCourse.find();
  return result;
};
const deleteBoatDiveCourseFromDB = async (id) => {
  const result = await BoatDiveCourse.findByIdAndDelete(id);
  return result;
};

module.exports = {
  createBoatDiveCourseIntoDB,
  getAllBoatDiveCourseFromDB,
  deleteBoatDiveCourseFromDB,
};
