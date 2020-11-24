require("dotenv").config();
const { PORT, MONGO_DB } = process.env;

module.exports = { PORT, MONGO_DB };
