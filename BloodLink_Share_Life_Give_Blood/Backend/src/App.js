const express = require("express");
const authRuter = require('./Router/auth.route');
const cookieParse = require('cookie-parser');


const app = express();

app.use(express.json());
app.use(cookieParse());

app.get("/", (req, res) => {
  res.json({
    message: "BloodLink API is running",
  });
});


app.use("/api/auth", authRuter)

module.exports = app;
