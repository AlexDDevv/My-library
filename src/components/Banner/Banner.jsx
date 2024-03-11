import React from 'react'

export default function Banner({ banner, location }) {
  return (
    <div className='banner'>
        <img 
            src={banner} 
            alt="Image d'illustration d'une femme lisant un livre" 
            className={location} 
        />
    </div>
  )
}
