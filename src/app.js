const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://portfolio-web-admin.vercel.app",
    ],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));

module.exports = app;