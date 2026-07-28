import React from 'react'
import Login from './Pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashborad from './Pages/dashborad'
import Protect from './Protected/Protect'
import Admin_dash from './Pages/Admin/Admin_dash'
import DashboardHome from './Pages/Admin/dashboardHome'
import Vehicles from './Pages/Admin/Vehicles'
import Fleet_dash from './Pages/Fleet_Manager/Fleet_dash'
import Dispatcher_dash from './Pages/Dispatcher/Dispatcher_dash'
import Driver_dash from './Pages/Driver/Driver_dash'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>

        <Route path='/' element={<><Login /></>} />
        <Route path='/dashboard/' element={<><Protect> <Dashborad /> </Protect></>} />

        <Route path="/admin" element={ <Protect><Admin_dash /></Protect> } >
          <Route index element={<DashboardHome />} />
          <Route path="vehicles" element={<Vehicles /> } />
        </Route>

        <Route path="/fleet" element={ <Protect><Navbar/> <Fleet_dash /> </Protect> } ></Route>

        <Route path="/dispatcher" element={ <Protect> <Navbar/><Dispatcher_dash /> </Protect> } ></Route>

        <Route path="/driver" element={ <Protect><Navbar/> <Driver_dash /> </Protect> } ></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
