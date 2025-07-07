import React, { useState } from 'react'
import "../index.css"
// import { initialItems } from '../../public/data'
import Listitem from './Listitem'
export function PackingList({ Item, ondelete, oncheckebox, onreset }) {
    return (
        <>
            <div className='list'>
                <ul>
                    {
                        Item.map((item, id) =>
                            <Listitem item={item} key={id} ondelete={ondelete} oncheckebox={oncheckebox} />
                        )
                    }
                </ul>
                <button onClick={() => onreset()}>Clear All 🚮</button>
            </div>
        </>
    )
}

