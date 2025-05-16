const axios = require("axios");

const queryGuardMiddleware = async (req, res, next) => {
  const logData = {
    method: req.method,
    endpoint: req.originalUrl,
    ip: req.ip,
    body: req.body,
    headers: req.headers,
    timestamp: new Date().toISOString(),
  };
  console.log("QueryGuard Log:", logData);

  try {
    await axios.post("http://3.149.254.38:3000/log", logData);
  } catch (err) {
    console.error("Failed to send log to QueryGuard:", err.message);
  }

  next();
};

module.exports = queryGuardMiddleware;
