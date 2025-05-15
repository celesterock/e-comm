const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// UNCOMMENT TO TEST MIDDLEWARE
const queryguardMiddleware = require("./middleware/queryGuardMiddleware");
app.use(queryguardMiddleware); // Apply QG logger globally

// Routes
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);
app.use("/search", require("./routes/search"));

// Serve frontend React build
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
