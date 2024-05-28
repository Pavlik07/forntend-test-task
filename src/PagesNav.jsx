import React from 'react'

function PagesNav({pages, currentPage, setCurrentPage}) {
    return (
        <div className='pagesDiv'>
            {pages.map(page => 
            <button 
                className = {`${currentPage === page ? 'active' : 'notActive'}`} 
                key={page} 
                onClick={() => setCurrentPage(page)}>{page}
            </button>
            )}
        </div>
    )
}

export default PagesNav