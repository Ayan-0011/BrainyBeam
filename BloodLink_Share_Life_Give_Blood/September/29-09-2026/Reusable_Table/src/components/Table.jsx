import React from 'react'
import './Table.css'

const Table = ({ data }) => {
    return (
        <div>
            <table className='custom-table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Blood Group</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.Bloodgroup}</td>
                                    <td>{item.city}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table
