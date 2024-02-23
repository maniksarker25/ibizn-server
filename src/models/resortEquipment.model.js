const { Schema, model } = require("mongoose");

const resortEquipmentSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});
const ResortEquipment = model("ResortEquipment", resortEquipmentSchema);

module.exports = ResortEquipment;
