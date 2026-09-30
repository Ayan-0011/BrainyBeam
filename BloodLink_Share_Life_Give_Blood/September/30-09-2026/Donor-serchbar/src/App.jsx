import React, { useState } from 'react'
import './App.css'
import Donor from './components/Donor'

const App = () => {


  return (
    <div className="container">
      <header className="page-header">
        <h1>Donors Request</h1>
      </header>

        <Donor/>

    </div>
  )
}

export default App
