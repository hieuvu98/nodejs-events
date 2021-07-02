const RedisHelper = require("../helpers/RedisHelper");
const redisKey = "redis.key.events";

exports.getEventsLatest = async (req, res, next) => {
  const events = await RedisHelper.getRedisListRange(redisKey, 0, 10);
  let data = [];
  if (events) {
    events.forEach((item) => {
      data.push(JSON.parse(item));
    });
  }
  return res.status(200).json({
    data: data,
  });
};

exports.getEventsAndFilter = async (req, res, next) => {
  const page = req.query.page * 1 || 1;
  const size = req.query.size * 1 || 10;
  const skip = (page - 1) * size;
  const events = await RedisHelper.getRedisListRange(redisKey, skip, size);
  let data = [];
  if (events) {
    events.forEach((item) => {
      data.push(JSON.parse(item));
    });
  }
  return res.status(200).json({
    data: data,
  });
};

exports.createEvent = async (req, res, next) => {
  const data = {
    ...req.body,
  };
  await RedisHelper.setRedisList(redisKey, JSON.stringify(data));
  return res.status(201).json({
    status: "success",
  });
};
