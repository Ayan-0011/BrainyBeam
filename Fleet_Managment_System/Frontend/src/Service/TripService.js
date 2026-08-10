import axios from "axios";

export const getTrips = async () => {
    const res = await axios.get('http://localhost:3000/api/trip', {
        withCredentials: true,
    });

    return res.data;
};

export const getSingleTrip = async (id) => {
    const res = await axios.get(`http://localhost:3000/api/trip/${id}`, {
        withCredentials: true,
    });

    return res.data;
};

export const createTrip = async (data) => {
    const res = await axios.post(`http://localhost:3000/api/trip/created`, data, {
        withCredentials: true,
    });

    return res.data;
};