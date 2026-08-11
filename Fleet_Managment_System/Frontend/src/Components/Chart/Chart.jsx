import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const Chart = ({ trips }) => {

    // build last 7 days (including today), oldest first
    const days = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        days.push(d);
    }

    const counts = days.map((day) =>
        trips.filter((t) => {
            if (!t.scheduledDeparture) return false;
            const tDate = new Date(t.scheduledDeparture);
            return tDate.toDateString() === day.toDateString();
        }).length
    );

    const data = {
        labels: days.map((d) => d.toLocaleDateString(undefined, { weekday: "short" })),
        datasets: [
            {
                label: "Trips",
                data: counts,
                backgroundColor: "#4f46e5",
                borderRadius: 6,
                maxBarThickness: 34,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: { stepSize: 1, precision: 0 },
                grid: { color: "#f1f2f4" },
            },
            x: {
                grid: { display: false },
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default Chart;