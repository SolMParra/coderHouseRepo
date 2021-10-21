import React from 'react'
import ItemCount from './ItemCount'

export const ItemDetail = ({ item }) => {
    console.log(item, "item")
    return (
        <>
            {item !== undefined ?
                <div>
                    <h1>{item.description}</h1>
                    <img src={item.img} alt="" />
                    <h2>Precio: ${item.price}</h2>
                    <h3>Description</h3>
                    <ItemCount stock={item.available_quantity} />
                </div>
                :
                <p>No hay nada para mostrar</p>

            }
        </>
    )
}
export default ItemDetail 