import React, { useEffect, useState } from "react";

const EditModal = ({ user, close, updateUser }) => {

    const [form, setForm] = useState({
        name: "",
        age: "",
        add: ""
    });

    useEffect(() => {
        if (user) {
        setForm(user);
        }
    }, [user]);

    const changeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value });
    };

    const submitHandler = () => {
        updateUser(form);
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

            <div className="bg-white p-6 rounded-xl w-[500px]">

                <h2 className="text-2xl font-bold mb-5">
                    Edit User
                </h2>

                <input type="text" name="name"  value={form.name} onChange={changeHandler} placeholder="Name" className="border w-full p-2 mb-3" />

                <input type="number" name="age" value={form.age} onChange={changeHandler}
                    placeholder="Age"
                    className="border w-full p-2 mb-3" />

                <input type="text"  name="add"  value={form.add} onChange={changeHandler}
                    placeholder="Address"
                    className="border w-full p-2 mb-3" />

                <div className="flex gap-3 mt-5">

                    <button onClick={submitHandler}
                        className="flex-1 bg-blue-600 text-white py-2 rounded" >
                        Save
                    </button>

                    <button onClick={close}
                        className="flex-1 bg-gray-500 text-white py-2 rounded" >
                        Cancel
                    </button>

                </div>

            </div>

        </div>
    );
};

export default EditModal;