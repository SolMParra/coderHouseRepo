import './WidgetCart.css';
import {Store} from '../../store';
import {useContext} from 'react';
import { useHistory } from 'react-router-dom';

const Widgetcart = ({show,action}) =>{

    const [data, setData] = useContext(Store);
    const history = useHistory();



    const eliminarItem = (id) => {
        const cantidadEliminada = data.items[id].item.cantidadEnCarro;
      
        data.items.splice(id,1);
        setData({
            ...data,
            cantidad: data.cantidad - cantidadEliminada,
            items: [...data.items]
        });

    }

    const eliminarTodos = () => {
        data.items.length = 0;
        setData({
            items: [],
            cantidad: 0,           
        });
    }


    const irCarro = () => {
        
        action();
        history.push("/cart");
    }    

    return (
        <>
            <div className={`widgetCart ${show ? 'open' : 'close' }`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 justify-content-end">
                            <span onClick={action} className="equis" title="Cerrar">X</span>
                        </div>
                        <div className="col-12 text-center ml-3 mb-4">
                            <h1>Carro de compras</h1>
                        </div>
                        <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                             data.items.length > 0 ?
                            data.items.map((item,index) => 

                            

                            <tr key={item.item.id}>
                            <th scope="row">{index+1}</th>
                            <td>{item.item.titulo}</td>
                            <td>{item.item.cantidadEnCarro}</td>
                            <td><i class="bi bi-trash" onClick={() => eliminarItem(index)}></i></td>
                            </tr>

                            )

                            : 
                            <tr><th scope="row" colSpan="4" className="text-center sinProductos" >No hay productos en el carro.</th></tr>
                        }

                        {data.items.length > 0 ? <tr><td colSpan="4"><button onClick={() => eliminarTodos()} className="btn btn-outline-dark btn-sm btn-block">Limpiar carro</button></td></tr> : ''}
                        </tbody>
                        </table> 
                    </div>
                    <div className="row align-items-end">
                                <div className="col-12">
                                        <button onClick={() => irCarro()} className="btn btn-info float-rigth">ir al carro</button>
                                </div>
                    </div>
                    
                </div>

                
            </div>
        </>
    );

}

export default Widgetcart;