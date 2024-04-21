const { Schema, model } = require("mongoose");

const packageSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    packageName: {
      type: String,
      required: true,
    },
    numberOfDay: {
      type: Number,
      required: true,
    },
    roomType: {
      type: String,
      required: true,
    },
    numberOfDivies: {
      type: Number,
      required: true,
    },
    fullBoard: {
      type: Boolean,
      default: false,
    },
    breakfast: {
      type: Boolean,
      default: false,
    },
    upgradeable: {
      type: Boolean,
      default: false,
    },
    divingCourses: {
      type: Boolean,
      default: false,
    },
    price: {
      type: Number,
      required: true,
    },
    resortDailySchedule: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Package = model("Package", packageSchema);

module.exports = Package;
