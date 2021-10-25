import React, { useState, useEffect, useContext } from 'react'
import Item from './Item'
import axios from "axios"
import AppContext from '../context/AppContext'

export const ItemList = () => {
  const [product, setProducts] = useState([])
  const addToCart  = useContext(AppContext);
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get("https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products?AIzaSyAR-A7EmvWIJHXem2yxnvWKUvZjlqKGFIU")
      setProducts(response.data)
      setLoading(false);
     
      
    }
      getProduct();
  }, []);
 
  const handleAddToCart = (product) =>  {
    addToCart(product)
  }

  const handleLoading = () => {
    if (isLoading) {
      return (
        <div>
          <h3>Cargando...</h3>
        </div>
      );
    } else {

      return (
        <div className= "cards">
          {
            product.map((element, id) => (

              <Item
                key={id}
                id={element.id}
                image={element.img}
                name={element.description}
                precio={element.price}
                stock={element.available_quantity}
                handleAddToCart={handleAddToCart}
              />
            )
            )
          }
        </div>
      )
    }
    
  }
  return handleLoading();
}







export default ItemList