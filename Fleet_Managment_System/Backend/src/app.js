const express = require('express');
const cookieParser = require('cookie-parser');
const routes  = require('./Routes/auth.routes');
const vehicleRoutes = require('./Routes/vehicale.routes');
const cors = require('cors');



const app = express();

app.use(cors({ origin: "http://localhost:5173",credentials: true } ));


app.use(express.json());
app.use(cookieParser());


app.use('/api/auth', routes);

app.use('/api/vehicles', vehicleRoutes);




module.exports = app