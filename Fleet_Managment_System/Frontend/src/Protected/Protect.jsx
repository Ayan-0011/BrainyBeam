import axios from 'axios';
import React, { Children, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Protect = ({Children}) => {

    const [user, setUser] = useState(null);

    const getdata = async()=>{
        try {
            const res = axios.get("http://localhost:3000/api/auth/me",{ withCredentials:true} );
            setUser(res.data)
        } catch (error) {
                toast(error.res.data.message)
        }
    }

    useEffect(() => {
        getdata()
    }, []);

    if(!user){
        return <Navigate to="/" />
    }
    return Children

  return (
    <div>
        
    </div>
  )
}

export default Protect
