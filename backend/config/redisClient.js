const { Redis } = require("@upstash/redis");

const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;

if (!url || !token) {
  throw new Error("❌ Missing UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN");
}

const redis = new Redis({ url, token });

// Remove redis.on(...) calls and replace with a ping check:
(async () => {
  try {
    await redis.ping();
    console.log("✅ Connected to Upstash Redis!");
  } catch (err) {
    console.error("❌ Redis Connection Error:", err);
  }
})();

const setCache = async (key, value, expiry = 3600) => { /* … */ };
const getCache = async (key) => { /* … */ };

module.exports = { redis, setCache, getCache };