import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate()

  const logout = ()=>{
    sessionStorage.clear();
    navigate("/login");
    
  }
  return (
    <div className='flex justify-between items-center py-6 md:px-10 px-5 bg-gray-900'>
        <p className='font-medium md:text-2xl text-lg me-2 text-white'>MediaSearch</p>
        <div className='flex gap-5 items-center text-white'>
          <button className='text-base font-medium active:scale-95 rounded px-4 py-2 bg-blue-700 ' >Search</button>
          <button className='text-base font-medium active:scale-95 rounded px-4 py-2 bg-blue-700' >Collection</button>
          <button className='text-base font-medium active:scale-95 rounded px-4 py-2 bg-red-500' onClick={logout}>Logout</button>
        </div>
      </div>
  )
}

export default Navbar