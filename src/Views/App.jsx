import { useState } from 'react'
import { Logo } from '../Components/Logo'
import { Form } from '../Components/Form'
import { PackingList } from '../Components/PackingList'
import { Footer } from '../Components/Footer'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [Item, setItem] = useState([])

  const handleNewFrmData = (formData) => {
    setItem((Item) => [...Item, formData])
  }

  const deletdFrmData = (id) => {
    setItem((Item) => Item.filter((Item) => Item.id !== id))
  }

  const handleCheckBox = (id) => {
    setItem((Item) => Item.map ((item) => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  const handleReset = () => {
    let confirm = window.confirm("Are you sure you want to reset?");
    if (Item.length > 0 && confirm !== false )
    {
      toast.warn("All items have been reset!🤔😢😱")
      setItem([])
    }
  }

  return (
    <>
      <div className='app'>
        <Logo />
        <Form addNewItem = {handleNewFrmData}/>
        <PackingList Item = {Item} ondelete = {deletdFrmData} oncheckebox = {handleCheckBox} />
        <Footer Item = {Item}/>
      </div>
    </>
  )
}

export default App
