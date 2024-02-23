const globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = "Something went wrong";
  return res
    .status(statusCode)
    .json({ success: false, message: err.message || message, error: err });
};

module.exports = globalErrorHandler;
