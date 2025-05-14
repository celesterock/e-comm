const express = require("express");
const router = express.Router();

// Simulated endpoint vulnerable to SQL injection pattern (for testing only)
router.get("/", async (req, res) => {
  const { query } = req.query;
  console.log("Search query received:", query); // Log for SQLi simulation
  res.json({ msg: `Search results for "${query}"` });
});

module.exports = router;
