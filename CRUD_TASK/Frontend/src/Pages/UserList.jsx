
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Usercard from "./Usercard";
import EditModal from "../Components/EditModal";

const UserList = () => {

    const [usercard, setUserCard] = useState([])
    const [openModal, setOpenModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const fetchdata = async () => {
        const data = await axios.get("http://localhost:3000/user");
        console.log(data.data.user);
        setUserCard(data.data.user)
    }

    const deletehandler = async (id) => {
        const data = await axios.delete(`http://localhost:3000/user/${id}`);
        fetchdata()
        toast.warning("user deleted successfully")
    }

    const updateUser = async (updatedUser) => {
        try {
            await axios.patch(`http://localhost:3000/user/${updatedUser._id}`, updatedUser);
            toast.success("User Updated Successfully");
            setOpenModal(false);
            fetchdata();
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchdata()
    }, []);

    const editHandler = (user) => {
        setSelectedUser(user);
        setOpenModal(true);
    };

    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-10">

                {usercard.length > 0 ? (
                    usercard.map((user) => (
                        <Usercard key={user._id} user={user} deletehandler={deletehandler} editHandler={editHandler} />
                    ))

                ) : (
                    <div className="col-span-full flex justify-center items-center h-60">
                        <h2 className="text-2xl font-semibold text-gray-500">
                            No User Found
                        </h2>
                    </div>
                )}

                {
                    openModal && (
                        <EditModal user={selectedUser} close={() => setOpenModal(false)} updateUser={updateUser}/>
                    )
                }
            </div>


        </div>
    );
};

export default UserList;










