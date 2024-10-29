import React from 'react'
import Button from '../Button/button'

const ItemListContainer = ({mensaje, fn}) => {
  return (
    <>
    <div>{mensaje}</div>
    <Button fn={fn} text="agregar al carrito"/>
    </>
  )
}

export default ItemListContainer