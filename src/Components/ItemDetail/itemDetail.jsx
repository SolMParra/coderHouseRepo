import './itemDetail.css';
import { useEffect, useState, useContext } from 'react';
import {Link, useParams} from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import {Store} from '../../store';

const ItemDetail = (prod) =>{

    console.log('producto por prod',prod);

    // Context 
    const [data, setData] = useContext(Store);


    // estado    
    const [count, setCount] = useState(1);

    const add = () => {

        //console.log(stock,count);

            if(count<prod.item.stock){
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

    // function para agregar al carro
    const CarroAdd = () => { 

        //valido si existe el producto
        if(existeProd()){
            //function para buscar el index del item repetido del carro
            const encontro = (item) => item.item.id == prod.item.id;
            const indiceItem = data.items.findIndex(encontro);
            //modifico el atributo cantidad en carro del item repetido a agregar
            data.items[indiceItem].item.cantidadEnCarro = data.items[indiceItem].item.cantidadEnCarro + count;

            //seteo cantidad general y piso el array items para actualizar las unidades del producto agregado
            setData({
                ...data,
                cantidad: data.cantidad + count,
                items: data.items
            }); 

        }else{

            // si no existe, agrego cantidad inicial del producto agregado al carro
            prod.item.cantidadEnCarro = count;     

            // seteo el valor de la cantidad y agrego el item al carro
            setData({
                ...data,
                cantidad: data.cantidad + count,
                items: [...data.items,prod]
            });            
            
        }
    } 
    
    // function para saber si existe el producto en el carro
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



        // Detalle del producto (ficha de presentacion)
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