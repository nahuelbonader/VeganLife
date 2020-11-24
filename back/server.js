require("./db/db");
const app = require("./app");
const chalk = require("chalk");
const { PORT } = require("./config");

app.listen(PORT, () =>
  console.log(chalk.blue("Server listen in port"), chalk.bgBlue(PORT))
);
