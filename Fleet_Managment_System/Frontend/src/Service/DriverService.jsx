import axios from "axios";

export const getDriver = async () => {
    const res = await axios.get('http://localhost:3000/api/driver', {
        withCredentials: true,
    });

    return res.data;
};


export const createDriver = async (data) => {
    const res = await axios.post(`http://localhost:3000/api/driver/created`, data, {
        withCredentials: true,
    });

    return res.data;
};

export const updateDriver = async (id, data) => {
    const res = await axios.put(`http://localhost:3000/api/driver/${id}`, data, {
        withCredentials: true,
    });
    //console.log(res.data);
    
    return res.data;
};

export const deleteDriver = async (id) => {
    const res = await axios.delete(`http://localhost:3000/api/driver/${id}`, {
        withCredentials: true,
    });

    return res.data;
};

 export const getProfile = async()=>{
    const res = await axios.get('http://localhost:3000/api/driver/profile', {withCredentials:true});
    return res.data
 }

 export const UpdateProfile = async(data)=>{
    const res = await axios.patch('http://localhost:3000/api/driver/Profile-update', data,  {withCredentials:true});
    return res.data
 } 
 export const UpdateAvailibilty = async(availability)=>{
    const res = await axios.patch('http://localhost:3000/api/driver/update-availability', { availability },  {withCredentials:true});
    return res.data
 } 