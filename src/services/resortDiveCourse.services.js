const ResortDiveCourse = require("../models/resortDiveCourse.model");

const createResortDiveCourseIntoDB = async (payload) => {
  const result = await ResortDiveCourse.create(payload);
  return result;
};

const getAllResortDiveCourseFromDB = async () => {
  const result = await ResortDiveCourse.find();
  return result;
};
const deleteResortDiveCourseFromDB = async (id) => {
  const result = await ResortDiveCourse.findByIdAndDelete(id);
  return result;
};

module.exports = {
  createResortDiveCourseIntoDB,
  getAllResortDiveCourseFromDB,
  deleteResortDiveCourseFromDB,
};
