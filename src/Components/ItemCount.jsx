import React, { useState,} from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';


export const Counter = ({ stock, product  }) => {
    const [counter, setCounter] = useState(1)
    //declaramos variable de counter.
    //declaramos la funcion setCounter 
    //declaramos valor inicial 1 en el useState
    
    const sumar = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }
    const restar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }
   return (
        <div>
            {stock > 0 ?
                <div>
                    <div>
                        <button onClick={restar} >-</button>
                        <div>{counter}</div>
                        <button onClick={(sumar)}>+</button>
                    </div>
                    <div>
                        <Button variant="success">Agregar al carro</Button>
                        <Link to="/CheckOut">Finalizar compra</Link>
                    </div>
                </div>
                :
                <p>No hay más disponibilidad</p>
            }
        </div>
    )
}
export default Counter
