import { useState } from 'react'
import { Logo } from '../Components/Logo'
import { Form } from '../Components/Form'
import { PackingList } from '../Components/PackingList'
import { Footer } from '../Components/Footer'

function App() {
  const [Item, setItem] = useState([])

  const handleNewFrmData = (formData) => {
    setItem((Item) => [...Item, formData])
  }

  const deletdFrmData = (id) => {
    setItem((Item) => Item.filter((Item) => Item.id !== id) )
  }

  const handleCheckBox = (id) =>{
    console.log("id==",id)
    setItem((Item) => Item.map ((item) => item.id === id ? {...item, packed : !item.packed} : item) )
  }

  return (
    <>
      <div className='app'>
        <Logo />
        <Form addNewItem = {handleNewFrmData}/>
        <PackingList Item = {Item} ondelete = {deletdFrmData} oncheckebox = {handleCheckBox} />
        <Footer />
      </div>
    </>
  )
}

export default App
