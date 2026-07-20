import React from 'react'
import { Link } from 'react-router-dom';

const My_Profile = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

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
            <h1>Account</h1>

        </>

    );

  }

export default My_Profile
