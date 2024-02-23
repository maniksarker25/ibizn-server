const { Schema, model } = require("mongoose");

const resortInclusionSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});
const ResortInclusion = model("ResortInclusion", resortInclusionSchema);

module.exports = ResortInclusion;
