import React from 'react'
import userForm from './hooks/userForm'
import './Form.css'

const Form = () => {

    const initialValues = {
        name: "",
        email: "",
        password: "",
    }

    const { value, HandleSubmit, HnaldeChange, resetFome, errors } = userForm(initialValues);
    return (
        <div className="form-container">
            <form onSubmit={HandleSubmit}>
                <h2>Registration Form</h2>

                <div className='sp'>
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Enter your name" value={value.name} onChange={HnaldeChange} />
                    {errors.name && (<p className='error'>{errors.name}</p>)}
                </div>

                <div className='sp'>
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Enter your email" value={value.email} onChange={HnaldeChange} />
                    {errors.email && (<p className='error'>{errors.email}</p>)}
                </div>

                <div className='sp'>
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter your password" value={value.password} onChange={HnaldeChange} minLength={4} />
                    {errors.password && (<p className='error'>{errors.password}</p>)}
                </div>

                <button type="submit">Register</button>

                <button type="button" onClick={resetFome} className="reset-btn">
                    Reset
                </button>
            </form>
        </div>
    );
};
export default Form
