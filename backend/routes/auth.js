const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//const axios = require("axios"); // You need this if you're using axios

// Login route
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Send log to QueryGuard
//  axios
//    .post("http://localhost:5173/logs", {
//      event: "login_attempt",
//      data: { username, ip: req.ip, timestamp: new Date() },
//    })
//    .catch(console.error);

  console.log("Login data received:", req.body);

  // Your actual login logic here
  res.status(200).json({ message: "Login received" });
});

// Register route
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    res.status(201).json({ msg: `Signed up user ${name}` });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
