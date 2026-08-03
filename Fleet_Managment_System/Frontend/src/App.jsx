import React from 'react'
import Login from './Pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashborad from './Pages/dashborad'
import Protect from './Protected/Protect'
import DashboardHome from './Pages/Admin/dashboardHome'
import Vehicles from './Pages/Admin/Vehicles'
import Fleet_dash from './Pages/Fleet_Manager/Fleet_dash'
import Dispatcher_dash from './Pages/Dispatcher/Dispatcher_dash'
import Driver_dash from './Pages/Driver/Driver_dash'
import Navbar from './Components/Navbar'
import DashboardLayout from './Layout/DashboardLayout'
import Drivers from './Pages/Admin/Drivers'

const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<><Login /></>} />
        <Route path='/dashboard/' element={<><Protect> <Dashborad /> </Protect></>} />

        <Route path="/admin" element={<Protect><DashboardLayout /></Protect>} >
          <Route index element={<DashboardHome />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="drivers" element={<Drivers />} />
        </Route>


        <Route path="/fleet" element={<Protect><DashboardLayout /></Protect>} >
          <Route index element={<Protect><Fleet_dash /></Protect>} ></Route>
        </Route>


        <Route path="/dispatcher" element={<Protect><DashboardLayout /></Protect>} >
          <Route index element={<Protect><Dispatcher_dash /> </Protect>} ></Route>
        </Route>


        <Route path="/driver" element={<Protect><DashboardLayout /></Protect>} >
          <Route index element={<Protect><Driver_dash /> </Protect>} ></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
