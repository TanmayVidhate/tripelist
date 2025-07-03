import React, { useState } from 'react'
import "../index.css"
export function Form() {
    const [description,setDescription] = useState("")
    const [quantity,setQuantity] = useState(1)

    const handleSubmit = (e) => {
        e.preventDefault(); 
        let formData = {id : Date.now() % 100 , description , quantity , packed : false}
        console.log(formData)
    }
    return (
        <>
            <form className='add-form' onSubmit={handleSubmit}>
                <h3>What do you need for your 🎒 trip?</h3>
                <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map
                        ((num) =>
                            <option value={num} key={num}>
                                {num}
                            </option>
                        )}
                </select>
                <input type='text' placeholder='Item...' value={description}  onChange={(e) => setDescription(e.target.value)}/>
                <button>Add</button>
            </form>

        </>
    )
}

