const { Schema, model } = require("mongoose");

const resortDiveCourseSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});
const ResortDiveCourse = model("ResortDiveCourse", resortDiveCourseSchema);

module.exports = ResortDiveCourse;
