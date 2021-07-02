const express = require("express");
const eventRouter = require("./routes/eventRoutes");
const app = express();

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use("/api/event/", eventRouter);

module.exports = app;
