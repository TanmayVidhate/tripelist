import React from 'react'
import "../index.css"
// import { initialItems } from '../../public/data'
import Listitem from './Listitem'
export function PackingList({newItem}) {
    return (
        <>
            <div className='list'>
                <ul>
                    {
                        newItem.map((item, id) =>
                            <Listitem item={item} key={id} />
                        )
                    }
                </ul>
            </div>
        </>
    )
}

