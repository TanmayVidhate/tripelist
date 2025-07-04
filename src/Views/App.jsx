import { useState } from 'react'
import { Logo } from '../Components/Logo'
import { Form } from '../Components/Form'
import { PackingList } from '../Components/PackingList'
import { Footer } from '../Components/Footer'

function App() {
  const [newItem, setNewItem] = useState([])

  const handleNewFrmData = (formData) => {
    setNewItem((newItem) => [...newItem, formData])
  }

  return (
    <>
      <div className='app'>
        <Logo />
        <Form addNewItem = {handleNewFrmData}/>
        <PackingList newItem = {newItem} />
        <Footer />
      </div>
    </>
  )
}

export default App
