import React from 'react'
import { NavLink } from 'react-router-dom'

const Hedaer = () => {
  return (
    <>
      <div className='bg-blue-500 text-white text-center p-12 text-2xl'>

        CRUD Operation
      </div>

      <div className='bg-gray-800 text-white'>
        <ul className='flex gap-5 p-5 '>
          <li className='hover:text-gray-500'><NavLink to="/">Add User</NavLink></li>
          <li className='hover:text-gray-500'><NavLink to="/userlist">Manage User</NavLink></li>
        </ul>
      </div>
    </>
  )
}

export default Hedaer
