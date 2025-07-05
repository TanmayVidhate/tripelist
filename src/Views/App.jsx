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

  return (
    <>
      <div className='app'>
        <Logo />
        <Form addNewItem = {handleNewFrmData}/>
        <PackingList Item = {Item} ondelete = {deletdFrmData} />
        <Footer />
      </div>
    </>
  )
}

export default App
