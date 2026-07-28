import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Dashboard = () => {

    const { user, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {

        if (loading) return;

        if (!user) {
            navigate("/");
            return;
        }

        if (user.role === "admin") {
            navigate("/admin");

        } else if (user.role === "driver") {
            navigate("/driver");

        } else if (user.role === "dispatcher") {
            navigate("/dispatcher");
            
        } else if (user.role === "fleet_manager") {
            navigate("/fleet");
        }

    }, [user, loading, navigate]);

    return <h2>Loading...</h2>;
};

export default Dashboard;