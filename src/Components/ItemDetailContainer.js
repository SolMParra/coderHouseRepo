import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router'
import axios from 'axios'

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])
  const [isLoading, setLoading] = useState(true);
  const { product_id } = useParams()
  
  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(`https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products/?t=${product_id}&AIzaSyAR-A7EmvWIJHXem2yxnvWKUvZjlqKG`)
      setProduct(response.data)
      setLoading(false);
    }
    getProduct();
  }, []);



  console.log("entro en la verga esta")
  console.log(product)


  const handleLoading = () => {
    if (isLoading) {
      return (
        <div>
          <h3>Cargando...</h3>
        </div>
      );
    } else {


      return (
        <>
          <ItemDetail item={product} />
        </>
      )
    }
  }
  return handleLoading();
}
  export default ItemDetailContainer

