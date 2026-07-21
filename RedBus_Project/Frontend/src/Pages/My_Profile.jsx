import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const My_Profile = () => {

    const navigate = useNavigate();
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const logout = () => {
        localStorage.removeItem('currentUser');
        navigate('/')
    }


    if (!currentUser) {

        return (

            <div className="login-required">
                <div className="login-box">

                    <h2>
                        Login Required
                    </h2>
                    <p>
                        Log in to manage your bookings.
                    </p>

                    <Link to="/login" className="login-btn"  >
                        Login Now
                    </Link>
                </div>
            </div>

        );
    }

    return (
        <>
            <div className='main'>
                <h1>Account of {currentUser.name}</h1>
                <button onClick={logout}>Logout</button>
            </div>

        </>

    );

}

export default My_Profile
