import './itemDetail.css';
import { useEffect, useState, useContext } from 'react';
import {Link, useParams} from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import {Store} from '../../store';

const ItemDetail = (prod) =>{

    const [data, setData] = useContext(Store);
    const [count, setCount] = useState(1);
    const [stock, setStock] = useState(false)
    const add = () => {

            if(count<prod.item.stock){
                setCount(count + 1);
            }else{
                setStock (true)
                setTimeout(() => {
                 setStock(false)   
                }, 5000);
            }
    }

    const less = () => {

        if(count>0){

            setCount(count - 1);

        }
    }

    
    const CarroAdd = () => { 
        if(existeProd()){
            const encontro = (item) => item.item.id == prod.item.id;
            const indiceItem = data.items.findIndex(encontro);
          
            data.items[indiceItem].item.cantidadEnCarro = data.items[indiceItem].item.cantidadEnCarro + count;

            
            setData({
                ...data,
                cantidad: data.cantidad + count,
                items: data.items
            }); 

        }else{

           
            prod.item.cantidadEnCarro = count;     

          
            setData({
                ...data,
                cantidad: data.cantidad + count,
                items: [...data.items,prod]
            });            
            
        }
    } 
    
    const existeProd = () => {
        const buscaProd = data.items.find(item => item.item.id == prod.item.id);
        if(buscaProd){
            return true;
        }else{
            return false;
        }
    }
    

       const {id} = useParams();

       useEffect(() => {
        console.log(id);

       }, [id]);

    return (

        <>
       
        <div className="container">
            <div className="row mt-4">
                <div className="col-8 text-center">
                    <img src={prod.item.img} width="500" />
                   
                </div>
                <div className="col-4">
                    <div className="row">
                        <div className="col-12 text-center mt-5">
                            <span className="titulo">{prod.item.titulo} </span>

                        </div>                        
                        <div className="col-12 mt-4">
                            <span className="precio">Precio: <span className="precioValor">$ {prod.item.precio}</span> </span>

                        </div>
                        <div className="col-12 mt-3">
                            <span className="descripcion">Descripcion : 
                                <span className="descripcionTexto">
                                    {prod.item.descripcion}
                                </span>
                            </span>

                        </div>
                        <div className="col-12 mt-3">
                            <ItemCount
                            count={count}
                            add={add}
                            less={less}
                            />
                              {stock && <h5 style={{color: "#C6387"}}>Stock insuficiente</h5>}  

                            <button className="btn btn-outline-primary btn-sm btn-block" onClick={CarroAdd}>Agregar al Carro</button>
                            
                        </div>                        
                        <div className="col-12 mt-3">
                            <Link to={'/'} className="btn btn-outline-danger btn-sm btn-block">Volver</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        </>
    );
}

export default ItemDetail;