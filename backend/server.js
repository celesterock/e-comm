const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const queryGuardMiddleware = require("./middleware/queryGuardMiddleware");

dotenv.config();
connectDB();

const app = express();
app.set("trust proxy", true);

app.use(cors());
app.use(express.json());

// Use QueryGuard logging middleware here
app.use(queryGuardMiddleware);

app.use("/api/auth", require("./routes/authRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
