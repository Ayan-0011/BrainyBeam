import React from 'react'
import { Bounce, ToastContainer, Zoom } from 'react-toastify'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgetPassword';

const App = () => {
  return (
    <>
      <div>

        <ToastContainer
          position="top-center"
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
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Homepage />} />
            <Route path='/forget' element={<ForgotPassword />} />
          </Routes>
        </BrowserRouter>


      </div>
    </>
  )
}

export default App
