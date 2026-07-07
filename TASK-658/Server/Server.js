const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const otpStore = {};

const sendMail = require("./Utils/sendMail");

app.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    // JSON Server se users lao
    const response = await fetch(`http://localhost:3000/user?email=${email}`);
    const users = await response.json();

    // Email exist nahi karti
    if (users.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Email is not registered",
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    otpStore[email] = otp;

    await sendMail(email, otp);

    res.json({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.listen(5000, () => {
  console.log("Server Running On Port 5000");
});

