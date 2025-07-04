import React from 'react'
import "../index.css"
// import { initialItems } from '../../public/data'
import Listitem from './Listitem'
export function PackingList({newItem, ondelete}) {
    return (
        <>
            <div className='list'>
                <ul>
                    {
                        newItem.map((item, id) =>
                            <Listitem item={item} key={id} ondelete = {ondelete} />
                        )
                    }
                </ul>
            </div>
        </>
    )
}

