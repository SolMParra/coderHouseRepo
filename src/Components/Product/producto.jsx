import './producto.css';
import prod from '../../assets/26000-2A.jpeg';
import ItemCount from '../ItemCount/ItemCount';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function Producto({id,nombre,precio,stock,img}){

    //console.log(id);

    const [count, setCount] = useState(1);

    const add = () => {

        //console.log(stock,count);

            if(count<stock){
                setCount(count + 1);
            }else{
                alert('Stock Insuficiente!');
            }
    }

    const less = () => {

        if(count>0){

            setCount(count - 1);

        }
    }

    const CarroAdd = () => {

        alert('Agregado al carro, ' + count +' Unidad(es)');

    }

    return(

        <>
           <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div className="card anchoCard" >
                <Link to={`/detail/${id}`}><img className="card-img-top" src={`../../../images/${img}`} alt="Card image cap"/></Link>
                <div className="card-body">
                <h5 className="card-title">{nombre}  ${precio}</h5>
                    <p className="card-text">Stock : {stock}</p>
                    {/* <a href="#!" className="btn btn-outline-primary btn-sm btn-block" onClick={() => CarroAdd()}>Agregar al carro</a> */}
                    <Link to={`/detail/${id}`} className="btn btn-outline-primary btn-sm btn-block">Ver detalle</Link>
                </div>
            </div>
          </div>
        </>

    );

}

export default Producto;