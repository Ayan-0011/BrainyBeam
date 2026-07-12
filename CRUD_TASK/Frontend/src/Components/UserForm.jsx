import React, { useEffect, useState } from "react";
import axios from 'axios'

const UserForm = () => {

    const [user, setuser] = useState({
        name: "",
        age: "",
        add: ""
    })


    const submithandler = async (e) => {
        e.preventDefault();


        const response = await axios.post("http://localhost:3000/user", user)
        setuser({ name: "", age: "", add: "" })
        console.log(response.data);

    }




    const handlechange = (e) => {
        const { name, value } = e.target;
        setuser((currunt) => ({ ...currunt, [name]: value, }))
    }



    return (
        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                Add New User
            </h2>

            <form onSubmit={submithandler} className="space-y-5">
                <div>
                    <label className="block mb-2 text-gray-700 font-medium">
                        Full Name
                    </label>
                    <input type="text" onChange={handlechange} value={user.name} name="name"
                        placeholder="Enter your name"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label className="block mb-2 text-gray-700 font-medium">
                        Age
                    </label>

                    <input type="number" onChange={handlechange} name="age" value={user.age} placeholder="Enter your age"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label className="block mb-2 text-gray-700 font-medium">
                        Address
                    </label>
                    <textarea rows="3" onChange={handlechange} name="add" value={user.add}
                        placeholder="Enter your address"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none" ></textarea>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                    Add User
                </button>
            </form>
        </div>
    );
};

export default UserForm;