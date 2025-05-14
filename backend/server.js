//const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
//const queryguardMiddleware = require("./middleware/queryGuardMiddleware");
const authRoutes = require("./routes/auth");

dotenv.config();
//connectDB();

app.use(cors());
app.use(express.json());
//app.use(queryguardMiddleware); // Apply QG logger globally

app.use("/auth", authRoutes); // Prefix all /auth routes
app.use("/search", require("./routes/search"));

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);

app.use(bodyParser.json());
//app.use(queryguardMiddleware);

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
