import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const BeforeLogin = () => {

    const user = sessionStorage.getItem("s_aid");


  return (
    <div>
        {
            user ? <Navigate to="/" /> : <Outlet/>
        }
    </div>
  )
}

export default BeforeLogin
