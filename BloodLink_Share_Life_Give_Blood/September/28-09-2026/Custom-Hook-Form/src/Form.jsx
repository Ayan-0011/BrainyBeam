import React from 'react'
import userForm from './hooks/userForm'
import './Form.css'

const Form = () => {
    const { value, HandleSubmit, HnaldeChange, resetFome } = userForm();
  return (
   <div className="form-container">
      <form onSubmit={HandleSubmit}>
        <h2>Registration Form</h2>

        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={value.name}
          onChange={HnaldeChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={value.email}
          onChange={HnaldeChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={value.password}
          onChange={HnaldeChange}
          required
          minLength={6}
        />

        <button type="submit">Register</button>

        <button type="button" onClick={resetFome} className="reset-btn">
          Reset
        </button>
      </form>
    </div>
  );
};
export default Form
