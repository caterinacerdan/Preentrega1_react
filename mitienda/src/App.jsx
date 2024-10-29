import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/button'
import NavBar from './components/NavBar/navBar'
import ItemListContainer from './components/ItemListContainer/itemListContainer'

function App() {
  
  const[valor, SetValor] = useState(0)

  return (
    <>
    <NavBar valor={valor}/>

    <ItemListContainer mensaje="estamos resolviendo la entrega para que aprueben todos" fn={SetValor}/>
    </>
  )
}

export default App
