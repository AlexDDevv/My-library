import React from 'react'

export default function ModaleAlert({ closeModale }) {
  return (
    <div className='overlay' onClick={closeModale}>
        <div className="modale-container" onClick={(e) => e.stopPropagation()}>
            <p className='modale-content'>Ce livre a déjà été enregistré!</p>
            <button type="button" className='closeModale-btn' onClick={closeModale}>Fermer</button>
        </div>
    </div>
  )
}
