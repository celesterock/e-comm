const axios = require("axios");

function queryguardMiddleware(req, res, next) {
  const logData = {
    method: req.method,
    endpoint: req.originalUrl,
    ip: req.ip,
    headers: req.headers,
    body: req.body,
    timestamp: new Date().toISOString(),
  };

  //Logging data to verify
  console.log("QueryGuard Log:", logData);

  axios.post("http://3.149.254.38:3000/log", logData).catch((err) => {
    console.error("Query Guard log failed:", err.message);
  });

  next();
}

module.exports = queryguardMiddleware;
