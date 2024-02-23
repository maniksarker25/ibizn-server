const express = require("express");
const app = express();
const cors = require("cors");
// parser
// app.use(express.json());
app.use(express.json({ limit: "10mb" }));
app.use(cors());

// import all routes ---------

const globalErrorHandler = require("./utilities/globalErrorHandler");
const notFound = require("./utilities/notFound");
const userRoutes = require("./routes/user.routes");
const packageRoutes = require("./routes/package.routes");
const resortRoutes = require("./routes/resort.routes");
const itineraryRoutes = require("./routes/itinerary.routes");
const boatRoutes = require("./routes/boat.routes");
const resortFacilityRoutes = require("./routes/resortFacility.routes");
const resortInclusionRoutes = require("./routes/resortInclusion.routes");
const resortExclusionRoutes = require("./routes/resortExclusion.routes");
const resortEquipmentRoutes = require("./routes/resortEquipment.routes");
const resortDiveCourseRoutes = require("./routes/resortDiveCourse.routes");
const boatFacilityRoutes = require("./routes/boatFacility.routes");
const boatExclusionRoutes = require("./routes/boatExclusion.routes");
// const boatInclusionRoutes = require("./routes/BoatInclusion.routes");
const boatEquipmentRoutes = require("./routes/boatEquipment.routes");
const boatDiveCourseRoutes = require("./routes/boatDiveCourse.routes");
const bankInformationRoutes = require("./routes/bankInformation.routes");

// use all routes -----9---------
// some changes
app.use("/api/users", userRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/resorts", resortRoutes);
app.use("/api/boats", boatRoutes);
app.use("/api/itineraries", itineraryRoutes);
app.use("/api/resort-facilities", resortFacilityRoutes);
app.use("/api/resort-inclusions", resortInclusionRoutes);
app.use("/api/resort-exclusions", resortExclusionRoutes);
app.use("/api/resort-equipments", resortEquipmentRoutes);
app.use("/api/resort-dive-courses", resortDiveCourseRoutes);
// boats items
app.use("/api/boat-facilities", boatFacilityRoutes);
// app.use("/api/boat-inclusions", boatInclusionRoutes);
app.use("/api/boat-exclusions", boatExclusionRoutes);
app.use("/api/boat-equipments", boatEquipmentRoutes);
app.use("/api/boat-dive-courses", boatDiveCourseRoutes);
app.use("/api/bank-information", bankInformationRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(globalErrorHandler);
// not found
app.use(notFound);
module.exports = app;
