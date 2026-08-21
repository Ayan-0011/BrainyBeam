import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllmaintenance } from "../../Service/Maintenance";
import { getVehicles } from "../../Service/VehicleService";
import { Wrench, AlertTriangle, Truck, IndianRupee, CalendarClock, ClipboardList,} from "lucide-react";

const ATTENTION_WINDOW_DAYS = 15;


const getVehicleServiceFlag = (nextServiceDueDate) => {
  if (!nextServiceDueDate) return null;

  const now = new Date();
  const due = new Date(nextServiceDueDate);
  const diffDays = (due - now) / (1000 * 60 * 60 * 24);

  if (diffDays < 0) return { label: "Overdue", cls: "reasonInsurance" };
  if (diffDays <= ATTENTION_WINDOW_DAYS) return { label: "Due Soon", cls: "reasonService" };
  return null;
};

const Fleet_dash = () => {
  const navigate = useNavigate();

  const [maintenance, setMaintenance] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      setLoading(true);
      const [maintRes, vehicleRes] = await Promise.all([
        getAllmaintenance(),
        getVehicles(),
      ]);
      setMaintenance(maintRes.maintenance || []);
      setVehicles(vehicleRes.vehicle || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const vehiclesWithFlag = vehicles.map((v) => {
    const vehicleRecords = maintenance
      .filter((m) => m.vehicle?._id === v._id)
      .sort((a, b) => new Date(b.serviceDate) - new Date(a.serviceDate));

    const latestRecord = vehicleRecords[0] || null;
    const flag = latestRecord ? getVehicleServiceFlag(latestRecord.nextServiceDueDate) : null;
    return { ...v, latestRecord, flag };
  }).filter((v) => v.flag !== null);

  const overdueCount = vehiclesWithFlag.filter((v) => v.flag.label === "Overdue").length;

  const totalSpend = maintenance.reduce((sum, r) => sum + (Number(r.cost) || 0), 0);

  const recentRecords = [...maintenance]
    .sort((a, b) => new Date(b.serviceDate) - new Date(a.serviceDate))
    .slice(0, 8);

  if (loading) {
    return <div className="loadingState">Loading dashboard...</div>;
  }

  return (
    <div className="dashWrapper">

      <div className="dashHeader">
        <h2 className="title">Fleet Manager Dashboard</h2>
        <p className="subtitle">Maintenance overview for your fleet.</p>
      </div>

      {/* Stat cards */}
      <div className="statGrid">
        <div className="statCard">
          <div className="statIconBox blue">
            <Truck size={20} />
          </div>
          <div>
            <p className="statValue">{vehicles.length}</p>
            <p className="statLabel">Total Vehicles</p>
          </div>
        </div>

        <div className="statCard">
          <div className="statIconBox amber">
            <AlertTriangle size={20} />
          </div>
          <div>
            <p className="statValue">{vehiclesWithFlag.length}</p>
            <p className="statLabel">Service Due (15 days)</p>
          </div>
        </div>

        <div className="statCard">
          <div className="statIconBox red">
            <Wrench size={20} />
          </div>
          <div>
            <p className="statValue">{overdueCount}</p>
            <p className="statLabel">Overdue Services</p>
          </div>
        </div>

        <div className="statCard">
          <div className="statIconBox green">
            <IndianRupee size={20} />
          </div>
          <div>
            <p className="statValue">₹{totalSpend.toLocaleString("en-IN")}</p>
            <p className="statLabel">Total Maintenance Spend</p>
          </div>
        </div>
      </div>

      {/* Vehicles needing service */}
      <div className="dashCard">
        <div className="dashCardHeader">
          <h3><AlertTriangle size={16} /> Vehicles Due for Service</h3>
          <span className="dashCardCount">{vehiclesWithFlag.length}</span>
        </div>

        {vehiclesWithFlag.length > 0 ? (
          <table className="miniTable">
            <thead>
              <tr>
                <th>Image</th>
                <th>Registration #</th>
                <th>Brand</th>
                <th>Next Service Due</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {vehiclesWithFlag.map((v) => (
                <tr
                  key={v._id}>
                  <td>
                    <img src={v.vehicleImage} alt={v.registrationNumber} className="miniVehicleImage" />
                  </td>
                  <td>{v.registrationNumber}</td>
                  <td>{v.brand}</td>
                  <td>
                    {new Date(v.latestRecord.nextServiceDueDate).toLocaleDateString("en-IN")}
                  </td>
                  <td>
                    <span className={`reasonBadge ${v.flag.cls}`}>
                      {v.flag.label}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="miniEmptyState">No vehicles due for service.</p>
        )}
      </div>

      {/* Recent maintenance records */}
      <div className="dashCard">
        <div className="dashCardHeader">
          <h3><CalendarClock size={16} /> Recent Maintenance Records</h3>
          <span className="dashCardCount">{recentRecords.length}</span>
        </div>

        {recentRecords.length > 0 ? (
          <table className="miniTable">
            <thead>
              <tr>
                <th>Vehicle</th>
                <th>Service type</th>
                <th>Date</th>
                <th>Cost</th>
                <th>Next due</th>
              </tr>
            </thead>
            <tbody>
              {recentRecords.map((r) => (
                <tr key={r._id} >
                  <td>
                    <div className="im">
                      <img src={r.vehicle?.vehicleImage} alt="" className="vehicleImage" />
                      <p>{r.vehicle?.registrationNumber} </p>
                    </div>
                  </td>
                  <td>
                    <span className="typePill">
                      {r.serviceType?.replace("-", " ")}
                    </span>
                  </td>
                  <td>{new Date(r.serviceDate).toLocaleDateString("en-IN")}</td>
                  <td>₹{r.cost?.toLocaleString("en-IN")}</td>
                  <td>{new Date(r.nextServiceDueDate).toLocaleDateString("en-IN")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="miniEmptyState">No maintenance records yet.</p>
        )}
      </div>

    </div>
  );
};

export default Fleet_dash;