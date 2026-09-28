import React, { useState } from 'react'

const userForm = () => {
    const [value, setValue] = useState({
        name: "",
        email: "",
        password: ""
    })

    const HnaldeChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    }

    const HandleSubmit = (e) => {
        e.preventDefault();

        console.log("Form values", value);
        alert("Form submit sucess");
        setValue({ name: "", email: "", password: "" })
    }

    const resetFome = () => {
        setValue({ name: "", email: "", password: "" })
    }
    return { value, HandleSubmit, HnaldeChange, resetFome }
}

export default userForm
