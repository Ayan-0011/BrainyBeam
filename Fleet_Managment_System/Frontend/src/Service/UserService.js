import axios from 'axios'

export const createUser = async (data) => {
    const res = await axios.post(`http://localhost:3000/api/auth/register`, data, { withCredentials: true });
    return res.data
}

export const getMe = async () => {
     const res = await axios.get('http://localhost:3000/api/auth/me', { withCredentials: true });
    return res.data
}

export const getUser = async () => {
    const res = await axios.get('http://localhost:3000/api/auth/users', { withCredentials: true });
    return res.data
}

export const editUser = async (id, data) => {
    const res = await axios.patch(`http://localhost:3000/api/auth/users/${id}`, data, { withCredentials: true });
    return res.data
}

export const deletUser = async (id) => {
    const res = await axios.delete(`http://localhost:3000/api/auth/users/${id}`, { withCredentials: true });
    return res.data
}