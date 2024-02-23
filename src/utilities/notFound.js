const httpStatus = require("http-status");

const notFound = (req, res, next) => {
  return res
    .status(httpStatus.NOT_FOUND)
    .json({ success: false, message: "Api Not found", error: "" });
};

module.exports = notFound;
