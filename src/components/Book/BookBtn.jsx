import React from 'react'

export default function BookBtn({ addOrRemove, contentBtn }) {
    return (
        <button type='button' className="add-book" onClick={addOrRemove}>{contentBtn}</button>
    )
}
