import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Protect = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const res = await axios.get( "http://localhost:3000/api/auth/me",
                {
                    withCredentials: true,
                }
            );

            setUser(res.data.user);
        } catch (error) {
            console.log(error.response?.data);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    if (loading) return <h2>Loading...</h2>;

    if (!user) {
        return <Navigate to="/" />;
    }

    return children;
};

export default Protect;