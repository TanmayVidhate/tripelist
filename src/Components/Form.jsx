import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "../index.css"
export function Form({ addNewItem }) {

    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState(1)

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!description) {
            toast.error("Please Enter Description 💀")
            return null
        }

        let formData = { id: Date.now() % 100, description, quantity, packed: false }

        addNewItem(formData)

        setDescription("")
        setQuantity(1)
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
                <input type='text' placeholder='Item...' value={description} onChange={(e) => setDescription(e.target.value)} />
                <button>Add</button>
                <ToastContainer position="top-center" />
            </form>
        </>
    )
}

