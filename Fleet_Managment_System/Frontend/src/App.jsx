import React from 'react'
import Login from './Pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashborad from './Pages/dashborad'
import{ Bounce, ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Routes>
        <Route path='/' element={<><Login /></>} />
        <Route path='/dashboard' element={<><Dashborad /></>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
