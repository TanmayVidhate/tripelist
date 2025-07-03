import React from 'react'
import "../index.css"
function Listitem({ item: { description, quantity,packed } }) {

    return (
        <div >
            <li>
                <span style={{textDecoration : packed ? "line-through" : "none" }}>{description} {quantity}</span>
                <button>❌</button>
            </li>
        </div>
    )
}

export default Listitem