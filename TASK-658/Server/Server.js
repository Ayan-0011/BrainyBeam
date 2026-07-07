const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const sendMail = require("./Utils/sendMail");

app.get("/test-mail", async (req, res) => {
  try {
    const crypto = require('crypto');

    const otp = crypto.randomInt(100000,999999).toString();

    await sendMail("ayanansari9235@gmail.com", otp);

    res.json({
      success: true,
      message: "Email Sent Successfully",
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