import React, { useEffect, useState } from "react";
import axios from "axios";
import ChartCanvas from "./ChartCanvas";
import Pagination from "./Pagination";

import styles from "../styles/GrowthStage.module.css";

interface DataPoint {
  degree_days: number;
  time: number;
  precipitation: number;
  ndvi: number;
}

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
    <div className={styles.fp__container}>
      <h1 className={styles.fp__title}>GrowthStage</h1>
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
