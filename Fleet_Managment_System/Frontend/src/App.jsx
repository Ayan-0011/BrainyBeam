import React from 'react'
import Login from './Pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashborad from './Pages/Dashborad'
import Protect from './Protected/Protect'
import DashboardHome from './Pages/Admin/DashboardHome'
import Fleet_dash from './Pages/Fleet_Manager/Fleet_dash'
import Dispatcher_dash from './Pages/Dispatcher/Dispatcher_dash'
import Driver_dash from './Pages/Driver/Driver_dash'
import Layout from './Layout/Layout'
import DriverProfile from './Pages/Driver/DriverProfile'
import Admin_Vehicles from './Pages/Admin/Admin_Vehicles'
import Admin_Driver from './Pages/Admin/Admin_Driver'
import Fleet_Vehicle from './Pages/Fleet_Manager/Fleet_Vehicle'
import Fleet_Driver from './Pages/Fleet_Manager/Fleet_Driver'
import NotFound from './Pages/NotFounf'
import Vehicle from './Pages/Dispatcher/Vehicle'
import Driver from './Pages/Dispatcher/Driver'
import MyTrips from './Pages/Driver/MyTrips'
import DriverTripDetail from './Pages/Driver/DriverTripDetail'
import Admin_trip from './Pages/Admin/Admin_trip'
import Admin_tripdetail from './Pages/Admin/Admin_tripdetail'
import Trips from './Pages/Dispatcher/Trips'
import TripsDetail from './Pages/Dispatcher/TripsDetail'
import Admin_Fleet from './Pages/Admin/Admin_Fleet'
import Admin_dispatcher from './Pages/Admin/Admin_dispatcher'
import Fleet_trips from './Pages/Fleet_Manager/Fleet_trips'
import Fleet_tripdetail from './Pages/Fleet_Manager/Fleet_tripdetail'
import Fleet_Fuel from './Pages/Fleet_Manager/Fleet_Fuel'
import Admin_Fuel from './Pages/Admin/Admin_Fuel'
import Fleet_Maintenance from './Pages/Fleet_Manager/Fleet_Maintenance'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<><Login /></>} />
        <Route path='/dashboard/' element={<><Protect> <Dashborad /> </Protect></>} />

        <Route path="/admin" element={<Protect><Layout /></Protect>} >
          <Route index element={<DashboardHome />} />
          <Route path="vehicles" element={<Admin_Vehicles />} />
          <Route path="drivers" element={<Admin_Driver />} />
          <Route path="fleet-managers" element={<Admin_Fleet />} />
          <Route path="dispatchers" element={<Admin_dispatcher />} />
          <Route path="trips" element={<Admin_trip />} />
          <Route path="trips/:id" element={<Admin_tripdetail />} />
          <Route path="fuel" element={<Admin_Fuel />} />
        </Route>


        <Route path="/fleet" element={<Protect><Layout /></Protect>} >
          <Route index element={<Fleet_dash />} ></Route>
          <Route path="vehicles" element={<Fleet_Vehicle />} />
          <Route path="trips" element={<Fleet_trips />} />
          <Route path="trips/:id" element={<Fleet_tripdetail />} />
          <Route path="trips/:id" element={<Fleet_tripdetail />} />
          <Route path="fuel" element={<Fleet_Fuel />} />
          <Route path="drivers" element={<Fleet_Driver />} />
          <Route path="maintenance" element={<Fleet_Maintenance />} />
        </Route>


        <Route path="/dispatcher" element={<Protect><Layout /></Protect>} >
          <Route index element={<Protect><Dispatcher_dash /> </Protect>} ></Route>
          <Route path="trip" element={<Protect><Trips /> </Protect>} ></Route>
          <Route path="trips/:id" element={<Protect><TripsDetail /> </Protect>} ></Route>
          <Route path="vehicles" element={<Protect><Vehicle /> </Protect>} ></Route>
          <Route path="drivers" element={<Protect><Driver /> </Protect>} ></Route>
        </Route>


        <Route path="/driver" element={<Protect><Layout /></Protect>} >
          <Route index element={<Protect><Driver_dash /> </Protect>} ></Route>
          <Route path="trips" element={<Protect><MyTrips /> </Protect>} ></Route>
          <Route path="trips/:id" element={<Protect><DriverTripDetail /> </Protect>} ></Route>
          <Route path="profile" element={<Protect><DriverProfile /> </Protect>} ></Route>
        </Route>

        <Route path='*' element={<NotFound />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
