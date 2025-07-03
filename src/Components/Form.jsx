import React from 'react'
import "../index.css"
export function Form() {

    const handleSubmit = (e) => {
        e.preventDefault(); 
        
    }
    return (
        <>
            <form className='add-form' onSubmit={handleSubmit}>
                <h3>What do you need for your 🎒 trip?</h3>
                <select>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map
                        ((num) =>
                            <option value={num} key={num}>
                                {num}
                            </option>
                        )}
                </select>
                <input type='text' placeholder='Item...' />
                <button>Add</button>
            </form>

        </>
    )
}

