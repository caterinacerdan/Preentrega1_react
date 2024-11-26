import React, { useEffect, useState } from 'react'
import Button from '../Button/button'
import ItemList from './ItemList'
import { getProducts } from '../../data/backend-trucho'
import { getProductsByCategory } from '../../data/backend-trucho'

const ItemListContainer = ({mensaje, fn}) => {
  const[products, setProducts] = useState([])
  const[categoria, setCategory] = useState("")
  const [cargando, setCargando] = useState(false)

  /* useEffect(() => {

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
  }, [estatura]) */

  useEffect(() => {
    setCargando(true)
    if(categoria) {
      fetch(`https://fakestoreapi.com/products?limit=5/category/${categoria}`)
      .then(res=>res.json())
      .then(json=>setProducts(json))
      .finally(setCargando(false))
    }else{
    fetch("https://fakestoreapi.com/products?limit=5")
    .then(res=>res.json())
    .then(res=>setProducts(res))
    .finally(setCargando(false))
  }
}, [categoria])



  console.log(products);
  

  const changeCategory = () => {
    setCategory("men's clothing")
  }
  

  return (
    <>
    <div>
      <div>{mensaje}</div>
      <Button fn={fn} text="agregar al carrito"/>
    </div>

    <div>
      <div><Button fn={() => changeCategory("men's clothing")} text="Ropa de hombre"></Button></div>
      <ItemList products={products}/>
    </div>
    </>
  )
}

export default ItemListContainer