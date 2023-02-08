import { useState } from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import CarWidget from './components/CarWidget'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
    <div className="App">
      
      <nav className='NavB'>
        <NavBar/>
        <ItemListContainer greeting="Categorias"/>
        <CarWidget/>
      </nav>
      
    </div>
    </ChakraProvider>
    
  )
}

export default App