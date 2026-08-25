import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const AfterLogin = () => {

  const user = sessionStorage.getItem("s_aid");

  return (
    <div>
      {
        user ? <Outlet /> : <Navigate to="/login" />
      }
    </div>
  )
}

export default AfterLogin
