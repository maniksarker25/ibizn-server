const BankInformation = require("../models/bankInformation.model");

const createBankInformationIntoDB = async (userData, payload) => {
  const user = userData?.userId;
  const result = await BankInformation.create({ user, ...payload });
  return result;
};
// get single bank information from database
const getSingleBankInformationFromDB = async (userData) => {
  const result = await BankInformation.findOne({ user: userData.userId });
  return result;
};
const updateBankInformationIntoDB = async (userData, payload) => {
  const userId = userData?.userId;
  let update;
  if (payload.localBank) {
    update = { $set: { localBank: payload.localBank } };
  } else if (payload.wiseBank) {
    update = { $set: { wiseBank: payload.wiseBank } };
  }

  const result = await BankInformation.findOneAndUpdate(
    { user: userId },
    update,
    {
      new: true,
    }
  );
  return result;
};

module.exports = {
  createBankInformationIntoDB,
  updateBankInformationIntoDB,
  getSingleBankInformationFromDB,
};
