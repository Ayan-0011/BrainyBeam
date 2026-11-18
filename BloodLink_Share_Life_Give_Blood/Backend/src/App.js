const express = require("express");
const authRuter = require('./Router/auth.route');
const patientRequestRouter = require('./Router/patientRequest.route');
const bloodStockRouter = require('./Router/bloodStock.route'); 
const donationschedule = require('./Router/DonationSchedule.route');
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
app.use("/api/patient/requests", patientRequestRouter);
app.use("/api/admin/blood-stock", bloodStockRouter); 
app.use('/api/donor/schedules', donationschedule );           

module.exports = app;
