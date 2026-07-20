import React from 'react'
import HomePage from './Pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BusInformation from './Pages/BusInfomation'
import Navbar from './Components/Navbar'
import BusDetails from './Pages/BusDetails'
import { ToastContainer, Zoom } from 'react-toastify'
import Train from './Pages/Train'
import Hotel from './Pages/Hotel'
import Login from './Pages/Login'
import Register from './Pages/Register'
import PassengerInfo from './Pages/PassengerInfo'
import ReviewBooking from './Pages/ReviewBooking'
import MyBooking from './Pages/MyBooking'
import My_Profile from './Pages/My_Profile'
import Help from './Pages/Help'

const App = () => {
  return (
    <div>
      <BrowserRouter>

      <ToastContainer
        position="bottom-center "
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom} />

        <Navbar />

        <Routes>
          <Route path="/" element={<><HomePage /></>} />
          <Route path="/bus-info" element={<><BusInformation /></>} />
          <Route path="/bus/:id" element={<><BusDetails /></>} />
          <Route path='/train' element={<><Train /></>} />
          <Route path='/hotel' element={<><Hotel /></>} />
          <Route path='/login' element={<><Login /></>} />
          <Route path='/register' element={<><Register /></>} />
          <Route path='/passenger-info' element={<><PassengerInfo /></>} />
          <Route path='/review-booking' element={<><ReviewBooking /></>} />
          <Route path='/my-booking' element={<><MyBooking /></>} />
          <Route path='/my-profile' element={<><My_Profile /></>} />
          <Route path='/help' element={<><Help /></>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App