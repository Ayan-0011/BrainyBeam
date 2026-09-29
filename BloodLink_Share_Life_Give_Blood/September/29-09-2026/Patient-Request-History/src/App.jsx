import React, { useState } from 'react'
import Patient_request from './components/Patient_request'
import './App.css'

const App = () => {
  const requestHistory = [
    {
      id: "REQ001",
      patientName: "Ayan Ansari",
      bloodGroup: "O+",
      units: 2,
      hospital: "Civil Hospital",
      city: "Ahmedabad",
      date: "25 Sep 2026",
      status: "Pending",
    },
    {
      id: "REQ002",
      patientName: "Rahul Patel",
      bloodGroup: "A+",
      units: 1,
      hospital: "Sterling Hospital",
      city: "Ahmedabad",
      date: "22 Sep 2026",
      status: "Completed",
    },
    {
      id: "REQ003",
      patientName: "Neha Shah",
      bloodGroup: "B+",
      units: 3,
      hospital: "Zydus Hospital",
      city: "Ahmedabad",
      date: "20 Sep 2026",
      status: "Approved",
    },
    {
      id: "REQ004",
      patientName: "Mohit Patel",
      bloodGroup: "AB+",
      units: 2,
      hospital: "Shalby Hospital",
      city: "Ahmedabad",
      date: "18 Sep 2026",
      status: "Cancelled",
    },
    {
      id: "REQ005",
      patientName: "Priya Shah",
      bloodGroup: "O-",
      units: 1,
      hospital: "Civil Hospital",
      city: "Rajkot",
      date: "15 Sep 2026",
      status: "Completed",
    },
    {
      id: "REQ006",
      patientName: "Vivek Mehta",
      bloodGroup: "B-",
      units: 2,
      hospital: "HCG Hospital",
      city: "Ahmedabad",
      date: "12 Sep 2026",
      status: "Pending",
    },
    {
      id: "REQ007",
      patientName: "Karan Joshi",
      bloodGroup: "A-",
      units: 1,
      hospital: "Wockhardt Hospital",
      city: "Ahmedabad",
      date: "10 Sep 2026",
      status: "Approved",
    },
    {
      id: "REQ008",
      patientName: "Riya Patel",
      bloodGroup: "AB-",
      units: 2,
      hospital: "Sterling Hospital",
      city: "Vadodara",
      date: "07 Sep 2026",
      status: "Completed",
    },
    {
      id: "REQ009",
      patientName: "Arjun Shah",
      bloodGroup: "O+",
      units: 3,
      hospital: "Zydus Hospital",
      city: "Ahmedabad",
      date: "05 Sep 2026",
      status: "Cancelled",
    },
    {
      id: "REQ010",
      patientName: "Pooja Mehta",
      bloodGroup: "A+",
      units: 2,
      hospital: "Shalby Hospital",
      city: "Ahmedabad",
      date: "02 Sep 2026",
      status: "Completed",
    },
    {
      id: "REQ011",
      patientName: "Harsh Patel",
      bloodGroup: "B+",
      units: 1,
      hospital: "Civil Hospital",
      city: "Gandhinagar",
      date: "30 Aug 2026",
      status: "Pending",
    },
    {
      id: "REQ012",
      patientName: "Simran Shah",
      bloodGroup: "O+",
      units: 2,
      hospital: "HCG Hospital",
      city: "Ahmedabad",
      date: "28 Aug 2026",
      status: "Approved",
    },
    {
      id: "REQ013",
      patientName: "Nikhil Joshi",
      bloodGroup: "AB+",
      units: 1,
      hospital: "Wockhardt Hospital",
      city: "Vadodara",
      date: "25 Aug 2026",
      status: "Completed",
    },
    {
      id: "REQ014",
      patientName: "Komal Patel",
      bloodGroup: "A-",
      units: 2,
      hospital: "Sterling Hospital",
      city: "Ahmedabad",
      date: "22 Aug 2026",
      status: "Cancelled",
    },
    {
      id: "REQ015",
      patientName: "Dev Shah",
      bloodGroup: "B+",
      units: 3,
      hospital: "Civil Hospital",
      city: "Rajkot",
      date: "20 Aug 2026",
      status: "Completed",
    },
  ];


  const [serch, setSerch] = useState("");

  const HandleChange = (e) => {
    setSerch(e.target.value)
  }

  const filterd = requestHistory.filter((item) =>
    item.patientName.toLowerCase().includes(serch.toLowerCase()) ||
    item.bloodGroup.toLowerCase().includes(serch.toLowerCase()) ||
    item.hospital.toLowerCase().includes(serch.toLowerCase()) ||
    item.status.toLowerCase().includes(serch.toLowerCase()) 
  )

  return (
    <div className="container">
      <header className="page-header">
        <h1>Patient Request History</h1>
        <p>View your previous blood requests and their current status.</p>

        <input type="text" placeholder='Serch by Anithings...' onChange={HandleChange} value={serch}/>
      </header>

      <div className="table-card">
        <Patient_request data={filterd} />
      </div>
    </div>
  )
}

export default App
