import { Logo } from '../Components/Logo'
import { Form } from '../Components/Form'
import { PackingList } from '../Components/PackingList'
import { Footer } from '../Components/Footer'
function App() {


  return (
    <>
      <div className='app'>
        <Logo />
        <Form />
        <PackingList />
        <Footer />
      </div>
    </>
  )
}

export default App
