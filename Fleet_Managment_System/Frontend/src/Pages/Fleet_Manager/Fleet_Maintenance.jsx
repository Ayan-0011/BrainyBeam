import React, { useEffect, useState } from 'react'
import { getAllmaintenance } from '../../Service/Maintenance'
import { Droplets, Eye, Fuel, IndianRupee, Plus, Search } from 'lucide-react';
import './Maintenance.css'

const Fleet_Maintenance = () => {
    const [maintenance, setMaintenance] = useState([]);
    const [loading, setloading] = useState(true);

    const loaddmaintenance = async () => {
        try {
            const data = await getAllmaintenance();
            setMaintenance(data.maintenance);
            console.log(data);
        } catch (error) {
            console.log(error)
        } finally {
            setloading(false)
        }
    }

    useEffect(() => {
        loaddmaintenance();
    }, [])




    return (
        <div className="maintenance-page">

            <div className="maintenance-header">
                <div>
                    <h2 className="title">Maintenance</h2>
                    <p className="subtitle">Service records for every vehicle in the fleet.</p>
                </div>
                <div>
                    <button className="addBtn">
                        <Plus size={16} />
                        Add Vehicle
                    </button>
                </div>
            </div>

            <div className="maintenance-summary">
                <div className="maintenance-summary-card">
                    <div className="maintenance-icon blue">
                        <Fuel size={22} />
                    </div>
                    <div>
                        <span>Total records</span>
                        <h2>{maintenance.length}</h2>
                    </div>
                </div>

                <div className="maintenance-summary-card">
                    <div className="maintenance-icon green">
                        <IndianRupee size={22} />
                    </div>
                    <div>
                        <span>Total spend</span>
                        <h2>{}</h2>
                    </div>
                </div>

                <div className="maintenance-summary-card">
                    <div className="maintenance-icon orange">
                        <Droplets size={22} />
                    </div>
                    <div>
                        <span>Due within  days</span>
                        <h2></h2>
                    </div>
                </div>

            </div>


            <div className="toolbar">
                <div className="searchWrap">
                    <span className="searchIcon">
                        <Search size={16} />
                    </span>
                    <input type="text"
                        className="searchInput"
                        placeholder="Search by registration number..." />
                </div>

                <select className="filterSelect" >
                    <option value="">All service types</option>
                    <option value="oil-change">Oil change</option>
                    <option value="normal-service">Normal service</option>
                    <option value="brake-service">Brake service</option>
                    <option value="tyre-service">Tyre service</option>
                    <option value="engine-service">Engine service</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="maintenance-section tb">
                <div className="maintenance-section-header">
                    <div>
                        <h2>Maintenance Logs</h2>
                        <p>Recent maintenance entries from drivers</p>
                    </div>
                </div>

                {loading ? (
                    <div className="maintenance-message">
                        Loading Maintenace logs...
                    </div>
                ) : maintenance.length === 0 ? (
                    <div className="maintenance-message">
                        No Maintenance logs found.
                    </div>
                ) : (
                    <div className="maintenance-table-wrapper">
                        <table className="maintenance-table">
                            < thead >
                                <tr>
                                    <th>Image</th>
                                    <th>Registration</th>
                                    <th>Service type</th>
                                    <th>Service date</th>
                                    <th>Cost</th>
                                    <th>Next due</th>
                                    <th>Logged by</th>
                                    <th></th>
                                </tr>
                            </thead >

                            <tbody>
                                {maintenance.length > 0 ? (
                                    maintenance.map((record) => (
                                        <tr key={record._id}>
                                            <td>
                                                <img
                                                    src={record.vehicle?.vehicleImage}
                                                    alt={record.registrationNumber}
                                                    className="vehicleImage"
                                                />
                                            </td>
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
                                            <td>
                                                <button className="view-maintenance-btn">
                                                    <Eye size={16} /> 
                                                    View
                                                </button>
                                            </td>
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
                )}
            </div>
        </div>
    );
};


export default Fleet_Maintenance
