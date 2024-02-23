const { Schema, model } = require("mongoose");

const boatInclusionSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});
const BoatInclusion = model("BoatInclusion", boatInclusionSchema);

module.exports = BoatInclusion;
