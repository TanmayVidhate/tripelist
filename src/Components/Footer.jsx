import React from 'react'

export function Footer({ Item }) {
  const NoOfItems = Item.length
  const PackedItems = Item.filter((item) => item.packed === true).length
  const Percentage = NoOfItems > 0 ? Math.round((PackedItems / NoOfItems) * 100) : 0;

  return (
    <footer className='stats'>
      <em>
        {Percentage === 100
          ?
          "You got everything! Ready to go ✈ 👋"
          :
          `You have ${NoOfItems} items on your list, and you already packed ${PackedItems} ${Percentage}% `
        }
      </em>

    </footer>


  )
}

