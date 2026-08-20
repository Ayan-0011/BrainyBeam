import axios from "axios"

export const getAllmaintenance = async () => {
    const res = await axios.get('http://localhost:3000/api/maintenance', {
        withCredentials: true
    });
    return res.data;
}

export const getSinglemaintenance = async (id) => {
    const res = await axios.get(`http://localhost:3000/api/maintenance/${id}`, {
        withCredentials: true
    });
    return res.data;
}

export const AddMaintenancerecord = async (data) => {
    const res = await axios.post(`http://localhost:3000/api/maintenance/create`, data, { withCredentials: true });
    return res.data
}
