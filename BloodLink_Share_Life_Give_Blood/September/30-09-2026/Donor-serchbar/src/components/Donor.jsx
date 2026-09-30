import React, { useState } from 'react'
import './Donor.css'

const Donor = () => {

 const DONORS = [
  {
    id: 1,
    name: "Rahul",
    bloodGroup: "A+",
    city: "Ahmedabad",
    phone: "9876543210",
    status: "Available",
  },
  {
    id: 2,
    name: "ABC",
    bloodGroup: "B+",
    city: "Rajkot",
    phone: "9876543211",
    status: "Available",
  },
  {
    id: 3,
    name: "Ayan",
    bloodGroup: "O+",
    city: "Vadodara",
    phone: "9876543212",
    status: "Unavailable",
  },
  {
    id: 4,
    name: "Patel",
    bloodGroup: "AB+",
    city: "Surat",
    phone: "9876543213",
    status: "Available",
  },
];


  const [serch, setSerch] = useState("");

  const HandleChange = (e) => {
    setSerch(e.target.value)
  }

  const filterd = DONORS.filter((item) =>
    item.name.toLowerCase().includes(serch.toLowerCase()) ||
    item.bloodGroup.toLowerCase().includes(serch.toLowerCase()) ||
    item.city.toLowerCase().includes(serch.toLowerCase()) ||
    item.phone.toLowerCase().includes(serch.toLowerCase())
  )

  return (
    <div className='serch-bar'>
      <input type="text" placeholder='Serch by Anithings...' onChange={HandleChange} value={serch} />
      <div className="table-card">

        <table className='custom-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Blood Group </th>
              <th>city</th>
              <th>Phone</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filterd.length === 0 ? (
              <td colSpan="6" className="not-found">
                Search item not found
              </td>
            ) : (
              filterd.map((request) => (
                <tr key={request.id}>
                  <td>{request.name}</td>
                  <td>{request.bloodGroup}</td>
                  <td>{request.city}</td>
                  <td>{request.phone}</td>
                  <td>
                    <span className={`status ${request.status.toLowerCase()}`}>
                      {request.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Donor
