const { Schema, model } = require("mongoose");

const boatFacilitiesSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});
const BoatFacility = model("BoatFacility", boatFacilitiesSchema);

module.exports = BoatFacility;
