import axios from "axios";

export const logEvent = async ({ endpoint, method = "POST", body }) => {
  const logData = {
    method,
    endpoint,
    body,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
  };

  console.log("Captured log:", logData);

  try {
    await axios.post("https://3.149.254.38:3000/logs", logData);
  } catch (err) {
    console.error("Error sending log to QueryGuard:", err.message);
  }
};
