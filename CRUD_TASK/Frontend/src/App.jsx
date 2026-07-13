
import { ToastContainer, Zoom } from 'react-toastify'
import Hedaer from './Components/Hedaer';
import UserForm from './Pages/UserForm';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import UserList from './Pages/UserList';

function App() {
  return (

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
            <Route path="/" element={<><Hedaer/><UserForm/></>}  />
            <Route path="/userlist" element={<><Hedaer/><UserList/></>}  />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;

