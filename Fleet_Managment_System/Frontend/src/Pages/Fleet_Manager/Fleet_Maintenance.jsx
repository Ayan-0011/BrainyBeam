import React, { useEffect, useState } from 'react'
import { getAllmaintenance } from '../../Service/Maintenance'
import { Plus, Search } from 'lucide-react';
import './maintenance.css'

const Fleet_Maintenance = () => {
    const [maintenance, setMaintenance] = useState([]);

    const loaddmaintenance = async () => {
        const data = await getAllmaintenance();
        setMaintenance(data.maintenance);
        console.log(data);
    }

    useEffect(() => {
        loaddmaintenance();
    }, [])


    return (
        <div className="wrapper">
            <div className="header">
                <div>
                    <h2 className="title">Maintenance</h2>
                    <p className="subtitle">Service records for every vehicle in the fleet.</p>
                </div>
            </div>

            <div className="statGrid">
                <div className="statCell">
                    <p className="statLabel">Total records</p>
                    <p className="statValue">{maintenance.length}</p>
                </div>
                <div className="statCell">
                    <p className="statLabel">Total spend</p>
                    <p className="statValue">₹{ }</p>
                </div>
                <div className="statCell statWarn">
                    <p className="statLabel">Due within  days</p>
                    <p className="statValue"></p>
                </div>
            </div>

            <div className="toolbar">
                <div className="searchWrap">
                    <span className="searchIcon">
                        <Search size={16} />
                    </span>
                    <input
                        type="text"
                        className="searchInput"
                        placeholder="Search by registration number..."


                    />
                </div>

                {/* <select
                    className="typeSelect"
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                >
                    <option value="">All service types</option>
                    <option value="oil-change">Oil change</option>
                    <option value="normal-service">Normal service</option>
                    <option value="brake-service">Brake service</option>
                    <option value="tyre-service">Tyre service</option>
                    <option value="engine-service">Engine service</option>
                    <option value="other">Other</option>
                </select> */}
            </div>

            <div className="tableCard">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Vehicle</th>
                            <th>Service type</th>
                            <th>Service date</th>
                            <th>Cost</th>
                            <th>Next due</th>
                            <th>Logged by</th>
                        </tr>
                    </thead>

                    <tbody>
                        {maintenance.length > 0 ? (
                            maintenance.map((record) => (
                                <tr key={record._id}>
                                    <td className="regNo">{record.vehicle?.registrationNumber}</td>
                                    <td>
                                        <span className="typePill">
                                            {record.serviceType?.replace("-", " ")}
                                        </span>
                                    </td>
                                    <td>{new Date(record.serviceDate).toLocaleDateString("en-IN")}</td>
                                    <td>₹{record.cost?.toLocaleString("en-IN")}</td>


                                    <td>{new Date(record.nextServiceDueDate).toLocaleDateString("en-IN")}</td>

                                    <td>{record.loggedBy?.name}</td>

                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="emptyState">
                                    No maintenance records found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <button className="fab" aria-label="Add maintenance">
                <Plus size={22} />
            </button>

        </div>
    );
};


export default Fleet_Maintenance
