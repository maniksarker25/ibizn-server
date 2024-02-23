const { Schema, model } = require("mongoose");

const boatDiveCourseSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});
const BoatDiveCourse = model("BoatDiveCourse", boatDiveCourseSchema);

module.exports = BoatDiveCourse;
