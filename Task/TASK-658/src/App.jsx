import React from 'react'
import { Bounce, ToastContainer, Zoom } from 'react-toastify'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgetPassword';
import Register from './Pages/Ragister';
import BeforeLogin from './Protected/BeforeLogin';
import AfterLogin from './Protected/AfterLogin';
import Verification_opt from './Pages/Verification_opt';

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

            <Route element={<BeforeLogin />}>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/forget' element={<ForgotPassword />} />
              <Route path='/verify' element={<Verification_opt />} />
            </Route>

            <Route element={<AfterLogin />}>
              <Route path='/' element={<Homepage />} />
            </Route>




          </Routes>
        </BrowserRouter>


      </div >
    </>
  )
}

export default App
