const httpStatus = require("http-status");
const AppError = require("../error/appError");
const Boat = require("../models/boat.model");
const Itinerary = require("../models/itenary.model");

const createBoatIntoDB = async (userData, payload) => {
  const user = userData?.userId;
  const result = await Boat.create({ user, ...payload });
  return result;
};

// get all boat from db
// const getAllBoatFromDB = async (queryData) => {
//   const { destination, date, minRating, maxRating } = queryData;

//   // Query the Itinerary collection to find matching itineraries
//   const itineraries = await Itinerary.find({ country: destination });

//   // Extract the itinerary IDs from the found itineraries
//   const itineraryIds = itineraries.map((itinerary) => itinerary._id);

//   // Build the query for boats with matching schedules
//   const query = {
//     schedules: {
//       $elemMatch: {
//         tripStart: { $lte: new Date(date) },
//         tripEnd: { $gte: new Date(date) },
//         itinerary: { $in: itineraryIds },
//       },
//     },
//   };

//   // Add veganRating condition if provided
//   // if (minRating && maxRating) {
//   //   query["veganRating"] = { $gte: minRating, $lte: maxRating };
//   // }

//   // Query the Boat collection with the constructed query
//   const result = await Boat.find(query).populate({
//     path: "schedules.itinerary",
//     model: "Itinerary", // Make sure to replace 'Itinerary' with the actual model name
//   });

//   return result;
// };

// another ------------
const getAllBoatFromDB = async (queryData) => {
  const { destination, date, minRating, maxRating } = queryData;

  // Initialize an empty query object
  const query = {};

  // Add destination condition if provided
  if (destination) {
    // Query the Itinerary collection to find matching itineraries
    const itineraries = await Itinerary.find({ country: destination });

    // Extract the itinerary IDs from the found itineraries
    const itineraryIds = itineraries.map((itinerary) => itinerary._id);

    // Add itinerary condition to the query if itinerary IDs were found
    if (itineraryIds.length > 0) {
      query.schedules = {
        $elemMatch: {
          itinerary: { $in: itineraryIds },
        },
      };
    }
  }

  // Add date condition if provided
  if (date) {
    const dateCondition = {
      tripStart: { $lte: new Date(date) },
      tripEnd: { $gte: new Date(date) },
    };

    // Add the date condition to the existing schedules query
    if (query.schedules && query.schedules.$elemMatch) {
      query.schedules.$elemMatch = {
        ...query.schedules.$elemMatch,
        ...dateCondition,
      };
    } else {
      query.schedules = {
        $elemMatch: dateCondition,
      };
    }
  }

  // Add veganRating condition if provided
  if (minRating !== "" && maxRating !== "") {
    console.log("raing");
    query.veganRating = { $gte: minRating, $lte: maxRating };
  }

  // Query the Boat collection with the constructed query
  const result = await Boat.find(query).populate({
    path: "schedules.itinerary",
    model: "Itinerary", // Make sure to replace 'Itinerary' with the actual model name
  });

  return result;
};
// get boats for operators --------
const getBoatsFromDB = async (id) => {
  const result = await Boat.find({ user: id });
  return result;
};

// get boat search item from db
const getBoatSearchItemFromDB = async () => {
  const pipeline = [
    // Unwind schedules to deconstruct the array into documents
    { $unwind: "$schedules" },

    // Convert the itinerary field to ObjectId
    {
      $addFields: {
        "schedules.itinerary": { $toObjectId: "$schedules.itinerary" },
      },
    },

    // Lookup itinerary details
    {
      $lookup: {
        from: "itineraries",
        localField: "schedules.itinerary",
        foreignField: "_id",
        as: "itineraryDetails",
      },
    },

    // Unwind itineraryDetails to deconstruct the array into documents
    { $unwind: "$itineraryDetails" },

    // Project the fields we are interested in
    {
      $project: {
        _id: 0,
        region: "$itineraryDetails.region",
        country: "$itineraryDetails.country",
      },
    },
  ];

  const result = await Boat.aggregate(pipeline).exec();
  return result;
};

// delete boat fromdb
const deleteBoatsFromDB = async (id) => {
  const result = await Boat.findByIdAndDelete(id);
  return result;
};

// get all approved boats from db
const getApprovedBoatsFromDB = async () => {
  const result = await Boat.find({ status: "approved" });
  return result;
};
// get all pending boats from db
const getAllPendingBoatsFromDB = async () => {
  const result = await Boat.find(
    { status: "pending" },
    { nameOfProperty: true, status: true }
  );
  return result;
};

// get single boat from db
const getSingleBoatFromDB = async (id) => {
  const result = await Boat.findById(id).populate({
    path: "schedules.itinerary",
    model: "Itinerary", // Make sure to replace 'Itinerary' with the actual model name
  });

  return result;
};

// update boat
const updateBoatFromDB = async (id, payload) => {
  const result = await Boat.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

// update single boat resitricted / unrestricted

const updateSingleBoatFromDB = async (id) => {
  const isExistBoat = await Boat.findById(id);
  if (!isExistBoat) {
    throw new AppError(httpStatus.NOT_FOUND, "Boat not found");
  }
  const payload = {
    resitricted: isExistBoat?.resitricted
      ? isExistBoat?.resitricted === true
        ? false
        : true
      : true,
  };

  const result = await Boat.findByIdAndUpdate(id, payload, {
    new: true,
  });

  return result;
};

module.exports = {
  createBoatIntoDB,
  getAllBoatFromDB,
  getBoatsFromDB,
  getBoatSearchItemFromDB,
  deleteBoatsFromDB,
  getApprovedBoatsFromDB,
  getAllPendingBoatsFromDB,
  updateBoatFromDB,
  getSingleBoatFromDB,
  updateSingleBoatFromDB,
};
