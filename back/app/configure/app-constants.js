const path = require("path");
const morgan = require("morgan");
const logMiddleware = morgan("tiny");

const rootPath = path.join(__dirname, "../../");

module.exports = (app) => {
  app.setValue("projectRoot", rootPath);
  app.setValue("log", logMiddleware);
};
