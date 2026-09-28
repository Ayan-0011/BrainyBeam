import React, { useState } from "react";
import "./BloodGroupDropdown.css";

const BloodGroupDropdown = () => {

    const [value, setValue] = useState(null);

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    console.log("Blood group is", value);

    const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-",];

    return (
        <div className="blood-group-field">

            <h1 className="lable"> Select Blood Group</h1>

            <select id="bloodGroup"
                value={value}
                onChange={handleChange}
                className="blood-group-select" >
                <option value="">Select Blood Group</option>

                {bloodGroups.map((group) => (
                    <option key={group} value={group}>
                        {group}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default BloodGroupDropdown;