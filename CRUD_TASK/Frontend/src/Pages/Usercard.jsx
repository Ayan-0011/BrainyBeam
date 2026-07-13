import axios from "axios";
import React from "react";

const Usercard = ({user, deletehandler}) => {

 

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            {/* Avatar & Name */}
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold uppercase">
                    {user?.name?.charAt(0)}
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                        {user?.name}
                    </h2>

                    <p className="text-gray-500">
                        User Information
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t my-5"></div>

            {/* Details */}
            <div className="space-y-3">
                <div className="flex justify-between">
                    <span className="font-semibold text-gray-600">
                        Age
                    </span>

                    <span className="text-gray-800">
                        {user?.age}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="font-semibold text-gray-600">
                        Address
                    </span>

                    <span className="text-gray-800 text-right max-w-[180px]">
                        {user?.add}
                    </span>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-6">
                <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition">
                    Edit
                </button>

                <button onClick={()=>{deletehandler(user._id)}}  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Usercard;
