require("./db/db");
const app = require("./app");
const chalk = require("chalk");
const { PORT } = require("./config");
const cors = require('cors')

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.listen(PORT, () =>
  console.log(chalk.blue("Server listen in port"), chalk.bgBlue(PORT))
);
