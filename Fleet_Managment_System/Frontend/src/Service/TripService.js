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

export const getMyTrips = async () => {
    const res = await axios.get('http://localhost:3000/api/trip/my-trips', {
        withCredentials: true,
        headers: { "Cache-Control": "no-cache" },
        params: { _t: Date.now() }, // cache-buster: avoids stale trip status after updates
    });

    return res.data;
};

export const updateTripStatus = async (id, tripStatus) => {
    const res = await axios.patch(`http://localhost:3000/api/trip/${id}/status`, { tripStatus }, {
        withCredentials: true,
    });

    return res.data;
};