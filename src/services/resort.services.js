const Resort = require("../models/resort.model");

const createResortIntoDB = async (userData, payload) => {
  const user = userData.userId;
  const result = await Resort.create({ user, ...payload });
  return result;
};

const getResortsFromDB = async (id) => {
  const result = await Resort.find({ user: id });
  return result;
};

// get all resorts from db
const getAllResortFromDB = async (queryData) => {
  const { destination, date, minRating, maxRating } = queryData;
  const andCondition = [];
  if (destination) {
    andCondition.push({ country: destination });
  }

  if (date) {
    const formattedDate = new Date(date);
    andCondition.push({
      $or: [
        { "deactivationPeriod.startDate": { $gt: formattedDate } },
        { "deactivationPeriod.endDate": { $lt: formattedDate } },
      ],
    });
  }

  // console.log(JSON.stringify(andCondition, null, 2));

  const result = await Resort.find({
    $and: andCondition.length > 0 ? andCondition : [{}],
  });

  return result;
};

// get resort search item
const getResortSearchItemFromDB = async () => {
  const result = await Resort.find().select("region country");
  return result;
};

// get single resort
const getSingleResotFromDB = async (id) => {
  const result = await Resort.findById(id).populate({
    path: "user",
    model: "User",
  });
  // console.log({result});
  return result;
};

// delete resort fromdb
const deleteResortFromDB = async (id) => {
  const result = await Resort.findByIdAndDelete(id);
  return result;
};
// get all pending resorts from db
const getAllPendingResortFromDB = async () => {
  const result = await Resort.find(
    { status: "pending" },
    { propertyName: true, status: true }
  ).populate({
    path: "user",
    model: "User",
  });
  return result;
};
// get all approved resorts from db
const getAllApprovedResortFromDB = async () => {
  const result = await Resort.find(
    { status: "approved" },
    { carousalImages: false }
  );
  return result;
};
const updateResortFromDB = async (id, payload) => {
  const result = await Resort.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};
const updateSingleResortFromDB = async (id) => {
  const isExistResort = await Resort.findById(id);
  if (!isExistResort) {
    throw new AppError(httpStatus.NOT_FOUND, "resort not found");
  }
  const payload = {
    resitricted: isExistResort?.resitricted
      ? isExistResort?.resitricted === true
        ? false
        : true
      : true,
  };

  const result = await Resort.findByIdAndUpdate(id, payload, {
    new: true,
  });

  return result;
};
module.exports = {
  createResortIntoDB,
  getResortsFromDB,
  getAllResortFromDB,
  deleteResortFromDB,
  getResortSearchItemFromDB,
  getAllPendingResortFromDB,
  getAllApprovedResortFromDB,
  updateResortFromDB,
  getSingleResotFromDB,
  updateSingleResortFromDB,
};
