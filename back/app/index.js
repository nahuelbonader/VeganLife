const express = require("express");
const app = express();

require("./configure")(app);

app.use("/api", require("../routes"));

module.exports = app;
