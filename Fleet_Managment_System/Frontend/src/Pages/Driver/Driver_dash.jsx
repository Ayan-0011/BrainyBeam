import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyTrips } from "../../Service/TripService";
import TripStatusChart from "../../Components/Chart/Tripstatuschart";
import { Route, CheckCircle2, Truck, CalendarClock, PieChart, History, PackageSearch, ArrowRight, } from "lucide-react";
import "./Dashboard.css";

const badgeClassMap = {
  scheduled: "ddbBadgeScheduled",
  "in-transit": "ddbBadgeInTransit",
  delivered: "ddbBadgeDelivered",
  closed: "ddbBadgeClosed",
};

const DriverDashboard = () => {

  const navigate = useNavigate();

  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTrips = async () => {
    try {
      setLoading(true);
      const res = await getMyTrips();
      setTrips(res.trips || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTrips();
  }, []);

  if (loading) {
    return <div className="ddbLoadingState">Loading your dashboard...</div>;
  }

  const totalTrips = trips.length;
  const completedTrips = trips.filter((t) => t.tripStatus === "closed").length;
  const ongoingTrips = trips.filter((t) => t.tripStatus === "scheduled" || t.tripStatus === "in-transit").length;

  const todaysTrip = trips.find((t) => {
    if (!t.scheduledDeparture) return false;
    return new Date(t.scheduledDeparture).toDateString() === new Date().toDateString();
  });

  const recentTrips = [...trips]
    .sort((a, b) => new Date(b.scheduledDeparture) - new Date(a.scheduledDeparture))
    .slice(0, 5);

  const vehicleNumberOf = (t) => t.assignedVehicle?.registrationNumber || t.vehicleNumber || "-";

  return (
    <div className="ddbWrapper">

      <div className="ddbGreeting">
        <h2>Your Dashboard</h2>
        <p>A quick look at your trips.</p>
      </div>

      {/* Stat cards */}
      <div className="statGrid">
        <div className="statCard">
          <div className="statIconBox blue"><Route size={17} /></div>
          <p className="statValue">{totalTrips}</p>
          <p className="statLabel">Total Trips</p>
        </div>

        <div className="statCard">
          <div className="statIconBox green"><CheckCircle2 size={17} /></div>
          <p className="statValue">{completedTrips}</p>
          <p className="statLabel">Completed</p>
        </div>

        <div className="statCard">
          <div className="statIconBox amber"><Truck size={17} /></div>
          <p className="statValue">{ongoingTrips}</p>
          <p className="statLabel">On Going</p>
        </div>

        <div className="statCard">
          <div className="statIconBox red"><CalendarClock size={17} /></div>
          <p className="statValue">{todaysTrip ? 1 : 0}</p>
          <p className="statLabel">Today's Trip</p>
        </div>
      </div>
      

      {todaysTrip ? (
        <div
          className="ddbTodayCard"
          onClick={() => navigate(`/driver/trips/${todaysTrip._id}`, { state: { trip: todaysTrip } })} >
          <span className="ddbTodayLabel">
            <CalendarClock size={13} /> Today's Trip
          </span>
          <p className="ddbTodayRoute">
            {todaysTrip.fromLocation} <ArrowRight size={18} className="arw" /> {todaysTrip.toLocation}
          </p>
          <p className="ddbTodayMeta">
            {vehicleNumberOf(todaysTrip)}
          </p>
          <span className="corner">
            {todaysTrip.tripStatus?.toUpperCase()}
          </span>
        </div>
      ) : (
        <div className="ddbNoTripCard">
          <PackageSearch size={26} />
          <p>No trip scheduled for today. Enjoy the break!</p>
        </div>
      )}

      <div className="ddbGrid">
        <div className="ddbColLeft">
          <div className="ddbCard">
            <div className="ddbCardTitle"><History size={13} /> Recent Trips</div>

            {recentTrips.length > 0 ? (
              recentTrips.map((t) => (
                <div
                  className="ddbRecentItem"
                  key={t._id}
                  onClick={() => navigate(`/driver/trips/${t._id}`, { state: { trip: t } })}>
                  <div>
                    <p className="ddbRecentRoute">
                      {t.fromLocation} <ArrowRight size={10} /> {t.toLocation}
                    </p>
                    <p className="ddbRecentDate">
                      {t.scheduledDeparture
                        ? new Date(t.scheduledDeparture).toLocaleDateString()
                        : "-"}
                    </p>
                  </div>
                  <span className={`ddbRecentBadge ${badgeClassMap[t.tripStatus] || ""}`}>
                    {t.tripStatus?.toUpperCase()}
                  </span>
                </div>
              ))
            ) : (
              <p className="ddbEmptyState">No trips assigned yet.</p>
            )}
          </div>
        </div>

        {totalTrips > 0 && (
          <div className="ddbColRight">
            <div className="ddbCard">
              <div className="ddbCardTitle"><PieChart size={13} /> Trip Status</div>
              <div className="ddbChartBox">
                <TripStatusChart trips={trips} />
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};

export default DriverDashboard;