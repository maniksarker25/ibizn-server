const { Schema, model } = require("mongoose");

const resortExclusionSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});
const ResortExclusion = model("ResortExclusion", resortExclusionSchema);

module.exports = ResortExclusion;
