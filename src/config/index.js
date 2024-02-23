const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.join(process.cwd(), ".env"),
});

module.exports = {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  node_env: process.env.NODE_ENV,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  jwt_secret: process.env.JWT_SECRET_KEY,
};
