import React from 'react'

export default function Pagination({ totalBooks, nbBooksToShow, setCurrentPage, currentPage }) {
    const totalPages = Math.ceil(totalBooks / nbBooksToShow);
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className='pagination-container'>
        {
            pages.map((page, index) => {
                return <button 
                    key={index} 
                    className={page === currentPage ? "pagination-btn active" : "pagination-btn"} 
                    onClick={() => setCurrentPage(page)} 
                    >{page}
                </button>
            })
        }
    </div>
  )
}
