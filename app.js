const express = require("express");
const EventService = require("./services/EventService");
const app = express();

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.get("/event/lastest", EventService.getEventsLatest);
app.get("/event/filter", EventService.getEventsAndFilter);
app.post("/event/create", EventService.createEvent);


module.exports = app;
