const { Schema, model } = require("mongoose");

const boatExclusionSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});
const BoatExclusion = model("BoatExclusion", boatExclusionSchema);

module.exports = BoatExclusion;
