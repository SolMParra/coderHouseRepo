import LogoCarro from '../../assets/logo-carro.png';
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
                <a href="#"><img src={LogoCarro} width="30" onClick={openWidgetCard} alt="LogoCarritoCompras"/></a>
            </div>
            <Widgetcart show={verWidgetCar} action={openWidgetCard} />

        </>
    );
}


export default Carro;