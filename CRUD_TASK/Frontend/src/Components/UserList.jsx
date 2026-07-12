
import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "./Usercard";

const UserList = () => {

    const [usercard, setUserCard] = useState([])

    const fetchdata = async () => {
        const data = await axios.get("http://localhost:3000/user");
        console.log(data.data.user);
        setUserCard(data.data.user)


    }

    useEffect(() => {
        fetchdata()
    }, [usercard]);

    return (
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition duration-300">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {usercard.map((user) => (
                    <UserCard key={user._id} user={user} />
                ))}
            </div>


        </div>
    );
};

export default UserList;










