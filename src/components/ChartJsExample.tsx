import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartsJsExample() {
  const labels = ["2017", "2018", "2019", "2020", "2021", "2022"];
  const options = {};
  const data = {
    labels,
    datasets: [
      {
        label: "React",
        data: [32, 42, 51, 60, 51, 95],
        backgrounfColor: "#2196f3",
        borderColor: "#2196f3",
      },
      {
        label: "Vue",
        data: [5, 22, 35, 60, 51, 77],
        backgrounfColor: "#28f321",
        borderColor: "#28f321",
      },
      {
        label: "Angular",
        data: [95, 42, 51, 60, 31, 11],
        backgrounfColor: "#f34121",
        borderColor: "#f34121",
      },
    ],
  };

  return (
    <div className="line-chart" style={{ width: 600, height: 300 }}>
      <h1>ChartsJsExample</h1>
      <Line options={options} data={data} />
    </div>
  );
}
