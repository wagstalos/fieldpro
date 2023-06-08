import React from "react";
import PaginationItem from "./PaginationItem";

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
    <div>
      <PaginationItem
        disabled={currentPage === 1}
        onClick={handlePreviousPage}
      >
        Previous Page
      </PaginationItem>
      <span>Page {currentPage}</span>
      <PaginationItem
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
      >
        Next Page
      </PaginationItem>
    </div>
  );
};

export default Pagination;
