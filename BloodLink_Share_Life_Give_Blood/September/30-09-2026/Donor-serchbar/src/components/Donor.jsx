import React, { useState } from 'react'
import './Donor.css'

const Donor = () => {

const DONORS = [
  {
    id: "DON001",
    donorName: "ABC",
    bloodGroup: "O+",
    city: "Ahmedabad",
    phone: "0000000001",
    status: "Available",
  },
  {
    id: "DON002",
    donorName: "XYZ",
    bloodGroup: "A+",
    city: "Rajkot",
    phone: "0000000002",
    status: "Available",
  },
  {
    id: "DON003",
    donorName: "PQR",
    bloodGroup: "B+",
    city: "Vadodara",
    phone: "0000000003",
    status: "Unavailable",
  },
  {
    id: "DON004",
    donorName: "LMN",
    bloodGroup: "AB+",
    city: "Ahmedabad",
    phone: "0000000004",
    status: "Available",
  },
  {
    id: "DON005",
    donorName: "DEF",
    bloodGroup: "O-",
    city: "Surat",
    phone: "0000000005",
    status: "Available",
  },
  {
    id: "DON006",
    donorName: "GHI",
    bloodGroup: "A-",
    city: "Gandhinagar",
    phone: "0000000006",
    status: "Unavailable",
  },
  {
    id: "DON007",
    donorName: "JKL",
    bloodGroup: "B-",
    city: "Ahmedabad",
    phone: "0000000007",
    status: "Available",
  },
  {
    id: "DON008",
    donorName: "MNO",
    bloodGroup: "AB-",
    city: "Rajkot",
    phone: "0000000008",
    status: "Available",
  },
  {
    id: "DON009",
    donorName: "STU",
    bloodGroup: "O+",
    city: "Vadodara",
    phone: "0000000009",
    status: "Unavailable",
  },
  {
    id: "DON010",
    donorName: "VWX",
    bloodGroup: "A+",
    city: "Ahmedabad",
    phone: "0000000010",
    status: "Available",
  },
  {
    id: "DON011",
    donorName: "ABC",
    bloodGroup: "B+",
    city: "Surat",
    phone: "0000000011",
    status: "Available",
  },
  {
    id: "DON012",
    donorName: "XYZ",
    bloodGroup: "O-",
    city: "Gandhinagar",
    phone: "0000000012",
    status: "Available",
  },
  {
    id: "DON013",
    donorName: "PQR",
    bloodGroup: "AB+",
    city: "Ahmedabad",
    phone: "0000000013",
    status: "Unavailable",
  },
  {
    id: "DON014",
    donorName: "LMN",
    bloodGroup: "A-",
    city: "Rajkot",
    phone: "0000000014",
    status: "Available",
  },
  {
    id: "DON015",
    donorName: "DEF",
    bloodGroup: "B-",
    city: "Vadodara",
    phone: "0000000015",
    status: "Available",
  },
];


  const [serch, setSerch] = useState("");

  const HandleChange = (e) => {
    setSerch(e.target.value)
  }

  const filterd = DONORS.filter((item) =>
    item.donorName.toLowerCase().includes(serch.toLowerCase()) ||
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
              <th>id</th>
              <th>donorName</th>
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
                  <td>{request.id}</td>
                  <td>{request.donorName}</td>
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
