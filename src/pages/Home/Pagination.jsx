import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        className="p-2"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        {"«"}
      </button>

      <button
        className="p-2"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        {"»"}
      </button>
    </div>
  );
};

export default Pagination;
