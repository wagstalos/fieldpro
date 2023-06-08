import React from "react";
import PaginationItem from "./PaginationItem";
import styles from "../styles/Pagination.module.css";
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={styles.fp__dflex}>
      <PaginationItem disabled={currentPage === 1} onClick={handlePreviousPage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-chevron-left"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="#F74D35"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M15 6l-6 6l6 6"></path>
        </svg>
      </PaginationItem>
      <span className={styles.fp_textPage}>Page {currentPage}</span>
      <PaginationItem
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-chevron-right"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="#F74D35"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 6l6 6l-6 6"></path>
        </svg>
      </PaginationItem>
    </div>
  );
};

export default Pagination;
