import {useContext, useState} from 'react';
import {Store} from '../../store';
import {Link } from 'react-router-dom';

const Cart = () =>{

    const [data,setData] = useContext(Store);
    const [total, setTotal] = useState(0);

    console.log(data);

    const eliminarItem = (id) => {

        //antes de eliminar guardo la cantidad del producto en el carro
        const cantidadEliminada = data.items[id].item.cantidadEnCarro;
        //elimino el item del array 
        data.items.splice(id,1);
        // seteo la cantidad (le resto la cantidad eliminada del item) y recupero el carro nuevamente
        setData({
            ...data,
            cantidad: data.cantidad - cantidadEliminada,
            items: [...data.items]
        });

    }

    const totalCarro = (data) => {
        let total = 0;
        let totalFila = 0;

        if(data.items.length>0){
            data.items.map(data=>{
                totalFila = data.item.precio * data.item.cantidadEnCarro;
                total = total + totalFila;
            });
        }


        return total;

    }

    

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center mt-3 mb-4">
                    <h3>Carro de compras</h3>
                </div>
            </div>
            <div className="row">
                <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Precio total</th>
                    <th scope="col">Accion</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.items.length > 0 ? 
                    data.items.map((item,index) => 
                        <tr>
                        <th scope="row">{index+1}</th>
                        <td>{item.item.titulo}</td>
                        <td>{item.item.cantidadEnCarro}</td>
                        <td>{item.item.precio}</td>
                        <td>{item.item.precio*item.item.cantidadEnCarro}</td>
                        <td><i class="bi bi-trash"  onClick={() => eliminarItem(index)}></i></td>
                        </tr>
                    )
                    :

                    <tr><th scope="row" colSpan="6" className="text-center sinProductos" >No hay productos en el carro.<Link className="btn btn-info btn-sm ml-3" to={'/'}>ir a Inicio</Link></th></tr>


                }
                </tbody>
                </table>
            </div>
            <div className="row">
                <div className="col-12">
                <span className="float-right ml-2" style={{color:'red'}}> {totalCarro(data)}</span><span className="float-right" style={{color:'black'}}>Total Carro:</span>
                </div>
            </div>
            {
                    data.items.length > 0 ? 
            <div className="row">
                <div className="col-12">
                <Link to={'/checkout'} className="btn btn-info">Finalizar Compra!</Link>
                </div>
            </div> : ''
            }                
        </div>
        

        </>
    );
}

export default Cart;