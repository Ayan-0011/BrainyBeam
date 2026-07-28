import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = async (formData) => {

    setLoading(true);

    try {
        const res = await axios.post(
            "http://localhost:3000/api/auth/login",
            formData,
            {
                withCredentials: true,
            }
        );

        await getUser();

        return {
            success: true,
            message: res.data.message,
        };
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || "Login Failed",
        };
    } finally {
        setLoading(false);
    }
};

    const getUser = async () => {

        try {
            const res = await axios.get("http://localhost:3000/api/auth/me", { withCredentials: true, });
            setUser(res.data.user);
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            await axios.post( "http://localhost:3000/api/auth/logout",
                {},
                {
                    withCredentials: true,
                }
            );

            setUser(null);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return (

        <AuthContext.Provider
            value={{ user, setUser, loading, getUser, logout, login }}>

            {children}

        </AuthContext.Provider>

    );
};

export const useAuth = () =>  useContext(AuthContext) ;