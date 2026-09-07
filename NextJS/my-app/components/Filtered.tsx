"use client"

import { useState } from "react";

type user = {
    id: number;
    name: string;
};

const Filtered = ({ users }: { users: user[] }) => {

    const [data, setData] = useState("");
    
    const filtereddata = users.filter((item) => item.name.toLowerCase().includes(data.toLowerCase()))
    return (
        <div className="text-center bg-gray-100 text-black p-5 text-2xl">
            <input type="text" placeholder="Search..." value={data} onChange={(e) => setData(e.target.value)} className="border m-3 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />

            <ul>
                {filtereddata.map((item) => (
                    <li key={item.id}>{item.id}. {item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Filtered
