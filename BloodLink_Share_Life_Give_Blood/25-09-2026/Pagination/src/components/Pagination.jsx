import React from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "./Pagination.css";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="pagination">

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft size={18} />
      </button>

      {Array.from(
        { length: totalPages },
        (_, index) => {
          const page = index + 1;

          return (
            <button
              key={page}
              className={
                currentPage === page
                  ? "active"
                  : ""
              }
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          );
        }
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight size={18} />
      </button>

    </div>
  );
};

export default Pagination;