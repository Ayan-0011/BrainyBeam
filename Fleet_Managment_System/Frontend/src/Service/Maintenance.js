import axios from "axios"

export const getAllmaintenance = async () => {
    const res = await axios.get('http://localhost:3000/api/maintenance', {
        withCredentials: true
    });
    return res.data;
} 

