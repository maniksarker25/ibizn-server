const Package = require("../models/package.model");

const createPackageIntoDB = (userData, payload) => {
  const user = userData?.userId;
  const result = Package.create({ user, ...payload });
  return result;
};

// get all packages into db
const getAllPackageIntoDB = async (id) => {
  const result = await Package.find({ user: id });
  return result;
};
// get Single package into db
const getSinglePackageIntoDB = async (id) => {
  const result = await Package.findById(id);
  return result;
}

// package update From DB
const updatePackageIntoDB = async (id,payload)=>{
  const result = await Package.findByIdAndUpdate(id, payload,{
    new:true
  });
  return result;
}

// delete package fromdb
const deletePackageFromDB = async (id) => {
  const result = await Package.findByIdAndDelete(id);
  return result;
};

module.exports = {
  createPackageIntoDB,
  getAllPackageIntoDB,
  deletePackageFromDB,
  getSinglePackageIntoDB,
  updatePackageIntoDB
};
