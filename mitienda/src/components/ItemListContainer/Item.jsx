import React from 'react'

const Item = ({elemento}) => {
    return (
          <div>
            <h3>
              {elemento.title}
            </h3>
            <img src={elemento.image} alt="beagle"/>
            <p>{elemento.category}</p>
            <p>${elemento.price}</p>
          </div>
        )
}

export default Item