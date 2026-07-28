import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Protect = ({ children }) => {

    const { user, loading } = useAuth();

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (!user) {
        return <Navigate to="/" />;
    }

    return children;
};

export default Protect;