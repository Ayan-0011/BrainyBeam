import React, { useEffect, useState } from "react";
import { deletUser, getUser } from "../../Service/UserService";
import { Pencil, Trash2, Plus, Mail, Phone } from "lucide-react";
import './fleet.css'
import Modal from "../../Components/Modal/Modal";
import UserForm from "../../Components/Form/UserForm";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
const Admin_Fleet = () => {

    const [user, setUser] = useState([]);
    const [openModal, setopenModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const loadFleet = async () => {
        try {
            const res = await getUser();
            setUser(res.Alluser || []);
        } catch (error) {
            console.log(error);
        }
    };

    const fleet = user.filter(
        (user) => user.role === "fleet_manager"
    );

    useEffect(() => {
        loadFleet();
    }, []);


    const handleAdd = () => {
        setopenModal(true);
        setSelectedUser(null);
        setEditModal(false)
    }
    const handleEdit = (fleetManager) => {
        setopenModal(true);
        setSelectedUser(fleetManager);
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
                loadFleet();
                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Fleet Manager has been deleted successfully.",
                    icon: "success",
                });
            } catch (error) {
                swalWithBootstrapButtons.fire({
                    title: "Error!",
                    text: "Failed to delete driver.",
                    icon: "error",
                });
            }
        }
    };

    return (
        <div className="fleet-page">
            <div className="fleet-header">
                <div>
                    <h1>Fleet Management</h1>
                    <p>Manage your fleet managers</p>
                </div>

                <div>
                    <button className="add-fleet-btn" onClick={handleAdd}>
                        <Plus size={18} />
                        Add Fleet Manager
                    </button>
                </div>
            </div>



            <div className="fleet-grid">
                {fleet.map((fleetManager) => (
                    <div className="fleet-card"
                        key={fleetManager._id}>
                        <div className="fleet-card-header">
                            <div className="fleet-profile">
                                <img src={fleetManager.profileImage} alt={fleetManager.name} />
                                <div>
                                    <h2>{fleetManager.name}</h2>
                                    <span className="fleet-role">
                                        Fleet Manager
                                    </span>
                                </div>
                            </div>
                        </div>



                        <div className="fleet-details">
                            <div className="fleet-detail">
                                <Mail size={17} />
                                <span>
                                    {fleetManager.email}
                                </span>
                            </div>

                            <div className="fleet-detail">
                                <Phone size={17} />
                                <span>
                                    {fleetManager.phone || "Not available"}
                                </span>
                            </div>
                        </div>


                        {/* Actions */}
                        <div className="fleet-actions">

                            <button className="edit-btn" onClick={() => handleEdit(fleetManager)} >
                                <Pencil size={16} />
                                Edit
                            </button>

                            <button className="delete-btn"
                                onClick={() => handleDelete(fleetManager._id)}>
                                <Trash2 size={16} />
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {fleet.length === 0 && (
                <div className="empty-fleet">
                    <h3>No Fleet Managers Found</h3>
                    <p>
                        Add a fleet manager to start managing your fleet.
                    </p>
                </div>
            )}

            <Modal
                isOpen={openModal}
                onClose={() => setopenModal(false)}
                title={editModal ? "Edit Feelt Manager" : "Add Feelt Manager"}>
                <UserForm
                    edituser={editModal}
                    user={selectedUser}
                    onSuccess={() => {
                        loadFleet();
                        setopenModal(false)
                    }}
                />
            </Modal>
        </div>
    );
};

export default Admin_Fleet;