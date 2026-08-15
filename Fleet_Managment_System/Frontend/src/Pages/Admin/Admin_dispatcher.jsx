import React, { useEffect, useState } from "react";
import { deletUser, getUser } from "../../Service/UserService";
import { Pencil, Trash2, Plus, Mail, Phone } from "lucide-react";
import './fleet.css'
import Modal from "../../Components/Modal/Modal";
import UserForm from "../../Components/Form/UserForm";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Admin_dispatcher = () => {
    const [user, setUser] = useState([]);
    const [openModal, setopenModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const loaddispatcher = async () => {
        try {
            const res = await getUser();
            setUser(res.Alluser || []);
        } catch (error) {
            console.log(error);
        }
    };

    const dispatcher = user.filter(
        (user) => user.role === "dispatcher"
    );

    useEffect(() => {
        loaddispatcher();
    }, []);


    const handleAdd = () => {
        setopenModal(true);
        setSelectedUser(null);
        setEditModal(false)
    }
    const handleEdit = (dispatcher) => {
        setopenModal(true);
        setSelectedUser(dispatcher);
        setEditModal(true);
        //console.log(fleetManager)
    };

    const handleDelete = async (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "my-confirm-btn",
                cancelButton: "my-cancel-btn",
            },
            buttonsStyling: false,
        });

        const result = await swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true,
        });

        if (result.isConfirmed) {
            try {
                await deletUser(id);
                loaddispatcher();
                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "dispatcher has been deleted successfully.",
                    icon: "success",
                });
            } catch (error) {
                swalWithBootstrapButtons.fire({
                    title: "Error!",
                    text: "Failed to dispatcher driver.",
                    icon: "error",
                });
            }
        }
    };

    return (
        <div className="fleet-page">
            <div className="fleet-header">
                <div>
                    <h1>dispatcher Management</h1>
                    <p>Manage your dispatcher</p>
                </div>

                <div>
                    <button className="add-fleet-btn" onClick={handleAdd}>
                        <Plus size={18} />
                        Add dispatcher
                    </button>
                </div>
            </div>



            <div className="fleet-grid">
                {dispatcher.map((dispatcher) => (
                    <div className="fleet-card"
                        key={dispatcher._id}>
                        <div className="fleet-card-header">
                            <div className="fleet-profile">
                                <img src={dispatcher.profileImage} alt={dispatcher.name} />
                                <div>
                                    <h2>{dispatcher.name}</h2>
                                    <span className="fleet-role">
                                        dispatcher
                                    </span>
                                </div>
                            </div>
                        </div>



                        <div className="fleet-details">
                            <div className="fleet-detail">
                                <Mail size={17} />
                                <span>
                                    {dispatcher.email}
                                </span>
                            </div>

                            <div className="fleet-detail">
                                <Phone size={17} />
                                <span>
                                    {dispatcher.phone || "Not available"}
                                </span>
                            </div>
                        </div>


                        {/* Actions */}
                        <div className="fleet-actions">

                            <button className="edit-btn" onClick={() => handleEdit(dispatcher)} >
                                <Pencil size={16} />
                                Edit
                            </button>

                            <button className="delete-btn"
                                onClick={() => handleDelete(dispatcher._id)}>
                                <Trash2 size={16} />
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {dispatcher.length === 0 && (
                <div className="empty-fleet">
                    <h3>No dispatcherFound</h3>
                    <p>
                        Add a fleet manager to start managing your fleet.
                    </p>
                </div>
            )}

            <Modal
                isOpen={openModal}
                onClose={() => setopenModal(false)}
                title={editModal ? "Edit dispatcher" : "Add dispatcher"}>
                <UserForm
                    title="dispatcher"
                    edituser={editModal}
                    user={selectedUser}
                    onSuccess={() => {
                        loaddispatcher();
                        setopenModal(false)
                    }}
                />
            </Modal>
        </div>
    )
}

export default Admin_dispatcher
