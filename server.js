const cluster = require("cluster");

if (cluster.isMaster) {
  const cpuCount = require("os").cpus().length;
  for (let i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }
} else {
  
  const dotenv = require("dotenv");
  dotenv.config({ path: "./config.env" });
  const app = require("./app");
  const port = process.env.PORT || 3308;

  app.listen(port, () => {
    console.log(`App running on port ${port}...`);
  });
}
