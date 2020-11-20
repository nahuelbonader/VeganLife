require("./db/db");
const app = require("./app");
const chalk = require("chalk");
const routes = require("./routes/index")


app.use("/api",routes)

//error middleware
app.use(function (err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).send(err.message);
});

const PORT = 1337;
app.listen(PORT, () =>
  console.log(chalk.blue("Server listen in port"), chalk.bgBlue(PORT))
);
