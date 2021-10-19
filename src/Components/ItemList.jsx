import React, { useState, useEffect, useContext } from 'react'
import Item from './Item'
import AppContext from '../context/AppContext'

export const ItemList = () => {
  const [product, setProducts] = useState([])
  const addToCart = useContext(AppContext);


 useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1403")
      .then(response => response.json())
      .then(data => setProducts(data.results))
  }, [])


  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <div>

      {
        product.map((element, id) => (

          <Item
            key={id}
            id={element.id}
            image={element.thumbnail}
            name={element.title}
            precio={element.price}
            stock={element.available_quantity}
            handleAddToCart={handleAddToCart}
          />

        ))
      }



    </div>
  )



}
export default ItemList