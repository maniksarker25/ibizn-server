const BoatBooking = require("../models/boatBooking.model");
const transporter = require("../config/smtp");
const AppError = require("../error/appError");
const createBoatBookingIntoDB = async (payload) => {
  const result = await BoatBooking.create(payload);
  const htmlMessage = `
  <div>
    <h1>You have a new booking request</h1>
    <p><strong>Phone:</strong> ${payload?.phone}</p>
    <p><strong>Email:</strong> ${payload?.email}</p>
    <p><strong>Number Of Guest:</strong> ${payload?.numberOfGuest}</p>
     <p>Check the property<a href=${`http://localhost:3000/secondPage/${payload?.property}`}>click here</a></p>
  </div>
`;

  // Sending the email
  const mailer = await transporter.sendMail({
    from: "deeparture.reservations@gmail.com",
    to: "maniksarker.official@gmail.com",
    subject: "New Booking Request",
    html: htmlMessage,
  });
  return result;
};

const getAllPendingBoatBookingFromDB = async (userData) => {
  console.log(userData);
  if (userData?.role === "admin") {
    const result = await BoatBooking.find({
      $and: [
        { bookingStatus: { $ne: "confirmed" } },
        { bookingStatus: { $ne: "rejected" } },
      ],
    }).populate({
      path: "property", // First level: populates the property field
      populate: {
        path: "schedules.itinerary", // Second level: populates schedules within property
        model: "Itinerary",
      },
    });
    return result;
  } else {
    const result = await BoatBooking.find({
      $and: [
        { bookingStatus: { $ne: "confirmed" } },
        { bookingStatus: { $ne: "pending" } },
      ],
    }).populate("property");
    return result;
  }
};

const getSingleBoatBookingFromDB = async (id) => {
  const result = await BoatBooking.findById(id)
    .populate({
      path: "property", // First level: populates the property field
      populate: {
        path: "schedules.itinerary", // Second level: populates schedules within property
        model: "Itinerary",
      },
    })
    .populate("operator");
  return result;
};

const updateBookingIntoDB = async (id, payload) => {
  const result = await BoatBooking.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const updateBookingStatusByAdminFromDB = async (id, status) => {
  console.log(status);
  const booking = await BoatBooking.findById(id);
  if (!booking) {
    throw new AppError("Booking not found");
  }
  const result = await BoatBooking.findByIdAndUpdate(
    id,
    { bookingStatus: status },
    {
      new: true,
      runValidators: true,
    }
  );
  return result;
};

module.exports = {
  createBoatBookingIntoDB,
  getAllPendingBoatBookingFromDB,
  getSingleBoatBookingFromDB,
  updateBookingIntoDB,
  updateBookingStatusByAdminFromDB,
};
