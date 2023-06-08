import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { ChartData, ChartOptions } from "chart.js";
import axios from "axios";

interface DataPoint {
  degree_days: number;
  time: number;
  precipitation: number;
  ndvi: number;
}

const ChartCanvas: React.FC<{ data: DataPoint[] }> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (data.length > 0) {
      const labels = data.map((point) =>
        new Date(point.time * 1000).toLocaleDateString()
      );
      const degreeDays = data.map((point) => point.degree_days);
      const precipitation = data.map((point) => point.precipitation);
      const ndvi = data.map((point) => point.ndvi);

      const chartData: ChartData = {
        labels,
        datasets: [
          {
            label: "Degree Days",
            data: degreeDays,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
          {
            label: "Precipitation",
            data: precipitation,
            backgroundColor: "rgba(192, 75, 192, 0.2)",
            borderColor: "rgba(192, 75, 192, 1)",
            borderWidth: 1,
          },
          {
            label: "NDVI",
            data: ndvi,
            backgroundColor: "rgba(192, 192, 75, 0.2)",
            borderColor: "rgba(192, 192, 75, 1)",
            borderWidth: 1,
          },
        ],
      };

      const chartOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

      if (chartRef.current) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(chartRef.current, {
          type: "line",
          data: chartData,
          options: chartOptions,
        });
      }
    }
  }, [data]);

  return <canvas ref={chartRef} width={600} height={300} />;
};

const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous Page
      </button>
      <span>Page {currentPage}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next Page
      </button>
    </div>
  );
};

const GrowthStage: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<DataPoint[]>(
          "https://raw.githubusercontent.com/alexanderboliva/test/main/api_example.json"
        );
        const jsonData = response.data;
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );
  const totalPages = Math.ceil(data.length / perPage);

  return (
    <div style={{ width: 900, height: 300 }}>
      <ChartCanvas data={paginatedData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default GrowthStage;
