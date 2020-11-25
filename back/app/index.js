const express = require("express");
const app = express();

require("./configure")(app);

app.use("/api", require("../routes"));

//error middleware
app.use(function (err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).send(err.message);
});

module.exports = app;
