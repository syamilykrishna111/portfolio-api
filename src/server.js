require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

app.get("/api/portfolio", (req, res) => {
  res.json({
    name: "John Doe",
    role: "Full Stack Developer",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});