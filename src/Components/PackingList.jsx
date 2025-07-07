import React from 'react'
import "../index.css"
// import { initialItems } from '../../public/data'
import Listitem from './Listitem'
export function PackingList({Item, ondelete, oncheckebox}) {
    return (
        <>
            <div className='list'>
                <ul>
                    {
                        Item.map((item, id) =>
                            <Listitem item={item} key={id} ondelete = {ondelete} oncheckebox = {oncheckebox}/>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

