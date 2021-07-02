const express = require("express");
const EventService = require("../services/EventService");
const router = express.Router();

router.get("/lastest", EventService.getEventsLatest);
router.get("/filter", EventService.getEventsAndFilter);
router.post("/create", EventService.createEvent);

module.exports = router;
