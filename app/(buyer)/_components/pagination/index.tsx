'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  lastPage: number;
  page: number;
  setPage: (page: number) => void;
}

export default function Pagination({ lastPage, page, setPage }: PaginationProps) {
  // Generate page numbers to display
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 6;

    if (lastPage <= maxVisiblePages) {
      for (let i = 1; i <= lastPage; i++) {
        pages.push(i);
      }
    } else {
      if (page <= 3) {
        for (let i = 1; i <= Math.min(maxVisiblePages, lastPage); i++) {
          pages.push(i);
        }
      } else if (page >= lastPage - 2) {
        for (let i = Math.max(1, lastPage - maxVisiblePages + 1); i <= lastPage; i++) {
          pages.push(i);
        }
      } else {
        for (let i = page - 2; i <= Math.min(page + 3, lastPage); i++) {
          pages.push(i);
        }
      }
    }
    return pages;
  };

  const pageNumbers = generatePageNumbers();

  const handlePageClick = (pageNum: number) => {
    if (pageNum !== page) {
      setPage(pageNum);
    }
  };

  const handlePrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextClick = () => {
    if (page < lastPage) {
      setPage(page + 1);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Pagination Controls */}
      <div className="flex items-center space-x-2">
        {/* Previous Button */}
        <button
          onClick={handlePrevClick}
          disabled={page <= 1}
          className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
            page <= 1
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Prev</span>
        </button>

        {/* Page Numbers */}
        <div className="flex items-center space-x-1">
          {pageNumbers.map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => handlePageClick(pageNum)}
              className={`w-10 h-10 text-sm font-medium rounded-full transition-colors ${
                pageNum === page
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              {pageNum}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNextClick}
          disabled={page >= lastPage}
          className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
            page >= lastPage
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-blue-600 hover:text-blue-700 hover:bg-blue-50'
          }`}
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
