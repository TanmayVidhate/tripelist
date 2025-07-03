import React from 'react'
import "../index.css"
import { initialItems } from '../../public/data'
import Listitem from './Listitem'
export function PackingList() {
    return (
        <>
            <div className='list'>
                <ul>
                    {
                        initialItems.map((item, id) =>
                            <Listitem item={item} key={id} />
                        )
                    }
                </ul>
            </div>
        </>
    )
}

