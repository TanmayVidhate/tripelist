import React from 'react'
import "../index.css"
function Listitem({ item: {id, description, quantity,packed }, ondelete }) {

    return (
        <div >
            <li>
                <span style={{textDecoration : packed ? "line-through" : "none" }}>{description} {quantity}</span>
                <button onClick={() => ondelete(id)}>❌</button>
            </li>
        </div>
    )
}

export default Listitem