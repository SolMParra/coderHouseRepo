import Widgetcart from '../WidgetCart/WidgetCart';
import { useState, useContext } from 'react';
import './carro.css';
import {Store} from '../../store';


function Carro(){

    const [data, setData] = useContext(Store);

    const [verWidgetCar, setVerWidgetCar] = useState(false);

    const openWidgetCard = () => {

        setVerWidgetCar(!verWidgetCar);

    }

    return(

        <>
            <div className={`${data.cantidad > 0 ? 'd-block' : 'd-none'}`}>
                <div className="contador">
                    <span>{data.cantidad}</span>
                </div>
                <a href="#"><i class="bi bi-basket" style={{ fontSize: "2rem", color: "BLACK"}} onClick={openWidgetCard} alt="LogoCarritoCompras"></i></a>

            </div>
            <Widgetcart show={verWidgetCar} action={openWidgetCard} />

        </>
    );
}


export default Carro;