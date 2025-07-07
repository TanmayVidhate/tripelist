import React from 'react'
import "../index.css"
function Listitem({ item: {id, description, quantity,packed }, ondelete, oncheckebox }) {

    return (
        <div >
            <li>
                <input type='checkbox' value = {packed} onChange = {() => oncheckebox(id)}/>
                <span style={{textDecoration : packed ? "line-through" : "none" }}>{description} {quantity}</span>
                <button onClick={() => ondelete(id)}>❌</button>
            </li>
        </div>
    )
}

export default Listitem