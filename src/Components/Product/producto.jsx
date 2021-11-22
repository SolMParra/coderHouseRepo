import './producto.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Producto({ id, nombre, precio, stock, img }) {



    const [count, setCount] = useState(1);

    const add = () => {



        if (count < stock) {
            setCount(count + 1);
        } else {
            alert('Stock Insuficiente!');
        }
    }

    const less = () => {

        if (count > 0) {

            setCount(count - 1);

        }
    }

    const CarroAdd = () => {

        alert('Agregado al carro, ' + count + ' Unidad(es)');

    }

    return (

        <>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                <div className="card anchoCard " >
                    <Link to={`/detail/${id}`}><img className="card-img-top" src={img} alt="Card image cap" /></Link>
                    <div className="card-body ">
                        <h5 className="card-title">{nombre}  ${precio}</h5>
                        <p className="card-text">Stock : {stock}</p>
                        <Link to={`/detail/${id}`} className="btn btn-info btn-sm btn-block">Ver detalle</Link>
                    </div>
                </div>
            </div>
        </>

    );

}

export default Producto;