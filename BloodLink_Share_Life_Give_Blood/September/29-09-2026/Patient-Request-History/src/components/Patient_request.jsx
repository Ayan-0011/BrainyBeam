import React from 'react'
import './patientrequest.css'

const Patient_request = ({ data }) => {

    return (
        <div>
            <table className='custom-table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Blood Group </th>
                        <th>Units</th>
                        <th>Hospitals</th>
                        <th>date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((request) => (
                        <tr key={request.id}>
                            <td>{request.id}</td>
                            <td>{request.bloodGroup}</td>
                            <td>{request.units}</td>
                            <td>{request.hospital}</td>
                            <td>{request.date}</td>
                            <td>
                                <span className={`status ${request.status.toLowerCase()}`}>
                                    {request.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Patient_request
