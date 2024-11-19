import React, { useEffect, useState } from 'react'
import Button from '../Button/button'
import ItemList from './ItemList'
import { getProducts } from '../../data/backend-trucho'
import { getProductsByCategory } from '../../data/backend-trucho'

const ItemListContainer = ({mensaje, fn}) => {
  const[products, setProducts] = useState([])
  const[estatura, setEstatura] = useState("")

  useEffect(() => {

    if (estatura) {
      getProductsByCategory(estatura)
      .then(result => setProducts(result))
      .catch(e => console.error(e))
      .finally(console.log("se resolvió la promesa"))
    }else{
    getProducts()
    .then(result => setProducts(result))
    .catch(e => console.error(e))
    .finally(console.log("se resolvió la promesa"))
    }
  }, [estatura])

  const changeEstatura = () => {
    setEstatura("mediano")
  }
  

  return (
    <>
    <div>
      <div>{mensaje}</div>
      <Button fn={fn} text="agregar al carrito"/>
    </div>

    <div>
      <div><Button fn={() => changeEstatura()} text="Perros medianos"></Button></div>
      <ItemList products={products}/>
    </div>
    </>
  )
}

export default ItemListContainer