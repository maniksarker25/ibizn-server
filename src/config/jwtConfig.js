const jwt = require("jsonwebtoken");
const config = require("../config/index");

const generateToken = (user) => {
  const payload = {
    userId: user._id,
    fullName: user.fullName,
    email: user.email,
    role: user.role,
  };

  return jwt.sign(payload, config.jwt_secret, { expiresIn: "10d" }); // you can adjust the expiration time here you can use anytime
};

module.exports = { generateToken };
