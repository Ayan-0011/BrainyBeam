const express = require('express');
const cookieParser = require('cookie-parser');
const routes  = require('./Routes/auth.routes');
const vehicleRoutes = require('./Routes/vehicale.routes');
const driverRouter = require('./Routes/Driver.routes');
const tripRouter  = require('./Routes/trip.routes');
const cors = require('cors');
const FuelRouter = require('./Routes/fuel.Routes');


const app = express();

app.use(cors({ origin:true, credentials: true } ));


app.use(express.json());
app.use(cookieParser());


app.use('/api/auth', routes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/driver', driverRouter);
app.use('/api/trip', tripRouter);
app.use('/api/fuel', FuelRouter);


module.exports = app