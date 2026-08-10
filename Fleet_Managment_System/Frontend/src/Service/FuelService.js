import axios from "axios";

export const getFuelByTrip = async (tripId) => {
    const res = await axios.get(`http://localhost:3000/api/fuel/${tripId}`, {
        withCredentials: true,
    });

    return res.data;
};

export const createFuelLog = async (data) => {
    const res = await axios.post(`http://localhost:3000/api/fuel/created`, data, {
        withCredentials: true,
    });

    return res.data;
};