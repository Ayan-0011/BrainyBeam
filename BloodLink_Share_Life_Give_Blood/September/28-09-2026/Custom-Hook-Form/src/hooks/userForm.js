import React, { useState } from 'react'

const userForm = (initialValues) => {
    const [value, setValue] = useState(initialValues)
    const [errors, setErrors] = useState({});

    const HnaldeChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });

        setErrors({ ...errors, [e.target.name]: "" })

    }

    const Validate = () => {
        let newerrors = {};

        if (!value.name.trim()) {
            newerrors.name = "Name is require"
        }
        if (!value.email.trim()) {
            newerrors.email = "email is require"
        }
        if (value.password < 4) {
            newerrors.password = "Password must be 4 Character"
        }

        setErrors(newerrors)

        return Object.keys(newerrors).length === 0;
    }

    const HandleSubmit = (e) => {
        e.preventDefault();

        if (Validate()) {
            console.log("Form values", value);
            alert("Form submit sucess");
            setValue({ name: "", email: "", password: "" })
        }
    }

    const resetFome = () => {
        setValue({ name: "", email: "", password: "" })
    }


    return { value, HandleSubmit, HnaldeChange, resetFome, errors }
}

export default userForm
