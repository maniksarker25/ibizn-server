const { Schema, model } = require("mongoose");

const boatBookingSchema = new Schema(
  {
    property: {
      type: Schema.Types.ObjectId,
      ref: "Boat",
      required: true,
    },
    operator: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    scheduleId: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    whatsapp: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    numberOfGuest: {
      type: Number,
      required: true,
    },
    bookingStatus: {
      type: String,
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const BoatBooking = model("BoatBooking", boatBookingSchema);

module.exports = BoatBooking;
