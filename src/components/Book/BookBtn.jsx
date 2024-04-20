import React from 'react'

export default function BookBtn({ addOrRemove, contentBtn }) {
    return (
        <button type='button' className={"bookFocus-btn"} onClick={addOrRemove}>{contentBtn}</button>
    )
}
