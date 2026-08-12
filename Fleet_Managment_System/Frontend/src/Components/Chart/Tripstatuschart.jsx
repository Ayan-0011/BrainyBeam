import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend,} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const STATUS_COLORS = {
    scheduled: "#4f46e5",
    "in-transit": "#f59e0b",
    delivered: "#22c55e",
    closed: "#9ca3af",
};

const TripStatusChart = ({ trips }) => {

    const counts = trips.reduce((acc, t) => {
        acc[t.tripStatus] = (acc[t.tripStatus] || 0) + 1;
        return acc;
    }, {});

    const labels = Object.keys(counts);

    const data = {
        labels: labels.map((l) => l.charAt(0).toUpperCase() + l.slice(1)),
        datasets: [
            {
                data: labels.map((l) => counts[l]),
                backgroundColor: labels.map((l) => STATUS_COLORS[l] || "#d1d5db"),
                borderWidth: 0,
                hoverOffset: 6,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "65%",
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    boxWidth: 10,
                    padding: 14,
                    font: { size: 12 },
                },
            },
        },
    };

    if (trips.length === 0) {
        return <p className="miniEmptyState">No trip data to show yet.</p>;
    }

    return <Doughnut data={data} options={options} />;
};

export default TripStatusChart;