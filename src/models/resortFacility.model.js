const { Schema, model } = require("mongoose");

const resortFacilitiesSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});
const ResortFacility = model("ResortFacility", resortFacilitiesSchema);

module.exports = ResortFacility;
