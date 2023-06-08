import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { ChartData, ChartOptions } from "chart.js";

interface ChartCanvasProps {
  data: DataPoint[];
}

interface DataPoint {
  degree_days: number;
  time: number;
  precipitation: number;
  ndvi: number;
}

const ChartCanvas: React.FC<ChartCanvasProps> = ({ data }) => {
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

export default ChartCanvas;
