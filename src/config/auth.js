const httpStatus = require("http-status");
const config = require("../config/index");
const catchAsync = require("../utilities/catchAsync");
const AppError = require("../error/appError");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const auth = (...requiredRoles) => {
  return catchAsync(async (req, res, next) => {
    // check if the token is sent from client -----
    const token = req?.headers?.authorization;
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, "Your are not authorized 2");
    }
    // check if the token is valid-
    const decoded = jwt.verify(token, config.jwt_secret);
    // console.log(decoded);
    const { role, userId, email } = decoded;
    // get the user if that here ---------

    const user = await User.findById(userId);
    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, "This user does not exist");
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, "Your are not authorized");
    }
    // add those properties in req
    //req.user = decoded as JwtPayload;
    req.user = decoded;
    next();
  });
};

module.exports = auth;
