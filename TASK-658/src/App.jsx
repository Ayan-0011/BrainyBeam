import React from 'react'
import Home from './Pages/Home'
import { Bounce, ToastContainer, Zoom } from 'react-toastify'

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


        <Home />

        
      </div>
    </>
  )
}

export default App
