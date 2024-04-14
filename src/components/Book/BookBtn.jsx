import React from 'react'

export default function BookBtn({ addOrRemove, contentBtn }) {
    return (
        <button className="add-book" onClick={addOrRemove}>{contentBtn}</button>
    )
}
