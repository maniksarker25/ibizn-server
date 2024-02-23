const { Schema, model } = require("mongoose");

const boatEquipmentSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});
const BoatEquipment = model("BoatEquipment", boatEquipmentSchema);

module.exports = BoatEquipment;
