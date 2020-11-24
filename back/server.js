require("./db/db");
const app = require("./app");
const chalk = require("chalk");

app.listen(PORT, () =>
  console.log(chalk.blue("Server listen in port"), chalk.bgBlue(PORT))
);
