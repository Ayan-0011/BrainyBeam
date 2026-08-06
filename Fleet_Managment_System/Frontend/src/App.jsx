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
import Assign_Trip from './Pages/Dispatcher/Assign_Trip'

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
        </Route>


        <Route path="/fleet" element={<Protect><Layout /></Protect>} >
          <Route index element={<Fleet_dash />} ></Route>
          <Route path="vehicles" element={<Fleet_Vehicle />} />
          <Route path="drivers" element={<Fleet_Driver />} />
        </Route>


        <Route path="/dispatcher" element={<Protect><Layout /></Protect>} >
          <Route index element={<Protect><Dispatcher_dash /> </Protect>} ></Route>
          <Route path="trip" element={<Protect><Assign_Trip /> </Protect>} ></Route>
        </Route>


        <Route path="/driver" element={<Protect><Layout /></Protect>} >
          <Route index element={<Protect><Driver_dash /> </Protect>} ></Route>
          <Route path="profile" element={<Protect><DriverProfile /> </Protect>} ></Route>
        </Route>

        <Route path='*' element={<NotFound/>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
