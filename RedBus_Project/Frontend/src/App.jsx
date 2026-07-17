import React from 'react'
import HomePage from './Pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BusInformation from './Pages/BusInfomation'
import Navbar from './Components/Navbar'
import BusDetails from './Pages/BusDetails'
import { ToastContainer, Zoom } from 'react-toastify'

const App = () => {
  return (
    <div>
      <ToastContainer
        position="top-right "
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<><HomePage /></>} />
          <Route path="/bus-info" element={<><BusInformation /></>} />
          <Route path="/bus/:id" element={<><BusDetails /></>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App