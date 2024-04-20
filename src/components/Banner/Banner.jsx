import React from 'react'

export default function Banner({ banner, location }) {
  return (
    <div className='banner'>
        <img 
            src={banner} 
            alt="Une femme lisant un livre confortablement installée dans un fauteuil" 
            className={location} 
        />
    </div>
  )
}
