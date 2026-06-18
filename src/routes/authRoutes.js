const express = require("express");
const router = express.Router();

const {
  register,
} = require("../controllers/authController");

router.post("/register", register);
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Auth route working",
  });
});

module.exports = router;