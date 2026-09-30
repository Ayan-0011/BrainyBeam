import React, { useState } from 'react'
import PatientRequests from './components/PatientRequests';
import './App.css'

const App = () => {


  return (
    <div className="container">
      <header className="page-header">
        <h1>Patient Request History</h1>
        <p>View your previous blood requests and their current status.</p>
      </header>

        <PatientRequests />

    </div>
  )
}

export default App
