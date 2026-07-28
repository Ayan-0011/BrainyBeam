import axios from "axios";

export const getVehicles = async () => {
    const res = await axios.get('http://localhost:3000/api/vehicles', {
        withCredentials: true,
    });

    return res.data;
};

export const createVehicle = async (data) => {
    const res = await axios.post(`http://localhost:3000/api/vehicles`, data, {
        withCredentials: true,
    });

    return res.data;
};

export const updateVehicle = async (id, data) => {
    const res = await axios.put(`http://localhost:3000/api/vehicles/${id}`, data, {
        withCredentials: true,
    });

    return res.data;
};

export const deleteVehicle = async (id) => {
    const res = await axios.delete(`http://localhost:3000/api/vehicles/${id}`, {
        withCredentials: true,
    });

    return res.data;
};