const cache = require('memory-cache');

const cacheMiddleware = (req, res, next) => {
  const key = req.originalUrl || req.url;
  const cachedResponse = cache.get(key);

  if (cachedResponse) {
    return res.json(cachedResponse);
  }

  res.sendResponse = res.json;
  res.json = (body) => {
    cache.put(key, body, process.env.CACHE_DURATION * 1000);
    res.sendResponse(body);
  };

  next();
};

module.exports = cacheMiddleware;
