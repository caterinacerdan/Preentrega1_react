import React from 'react'

const Item = ({elemento}) => {
    return (
          <div>
            <h3>
              {elemento.raza}
            </h3>
            <img src={elemento.img} alt="beagle" />
            <p>$ {elemento.precio}</p>
            <p>{elemento.estatura}</p>
          </div>
        )
}

export default Item