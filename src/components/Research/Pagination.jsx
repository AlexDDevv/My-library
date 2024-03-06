import React from 'react'

export default function Pagination({ totalBooks, booksPerPage, setCurrentPage, currentPage }) {
    let pages = []

    for(let i = 1; i <= Math.ceil(totalBooks/booksPerPage); i++) {
        pages.push(i)
    }
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
