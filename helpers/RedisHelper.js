var redis = require("redis");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

var client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

async function getRedisListRange(key, from, to) {
  return new Promise((resolve) => {
    client.lrange(key, from, to, function (err, obj) {
      resolve(obj);
    });
  });
}

async function setRedisList(key, value) {
  return new Promise((resolve) => {
    client.lpush(key, value, function (err, obj) {
      resolve(obj);
    });
  });
}

module.exports = {
  getRedisListRange,
  setRedisList,
};
