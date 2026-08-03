const express = require('express');
const cookieParser = require('cookie-parser');
const routes  = require('./Routes/auth.routes');
const vehicleRoutes = require('./Routes/vehicale.routes');
const driverRouter = require('./Routes/Driver.routes');
const cors = require('cors');



const app = express();

app.use(cors({ origin:true, credentials: true } ));


app.use(express.json());
app.use(cookieParser());


app.use('/api/auth', routes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/driver', driverRouter)




module.exports = app