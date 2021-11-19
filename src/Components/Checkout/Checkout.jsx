import {useContext, useState} from 'react';
import {Store} from '../../store';
import {getFirestore, getFirebase} from '../../firebase';
import firebase from 'firebase/app';

const Checkout = () => {

    const db = getFirestore();
    const app = getFirebase();
    const [data, setData] = useContext(Store);
    const [venta,ventaCompleta] = useState(false);
    const [compraId,setcompraId] = useState(0);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        tel: '',
    });

    const totalCarro = (data) => {

        // const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let total = 0;
        let totalFila = 0;

        // 1 + 2 + 3 + 4
        if(data.items.length>0){
        // console.log(data.items.reduce(reducer));
            data.items.map(data=>{
                totalFila = data.item.precio * data.item.cantidadEnCarro;
                total = total + totalFila;
            });
        }


        return total;

    }    

    const compra = {
        user : formData,
        items: data.items,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        totalCarro: totalCarro(data)
    };

    console.log(data);

    const handleChangeInput = (e) => {

        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        db.collection('ventas').add(compra)
        .then(({id})=>{

            eliminarTodos();
            ventaCompleta(true);
            setcompraId(id);
        })
        .catch(e => console.log(e))
    }

    const eliminarTodos = () => {
        data.items.length = 0;
        setData({
            items: [],
            cantidad: 0,           
        });
    }

    return ( <>

            <div className="container">
                <div className="row">
                        <div className="col-6">
                            <h3 className="mt-3 mb-3">Formulario de pago</h3>
                            {
                                !venta ?
                            
                                <form onSubmit={handleSubmitForm}>
                                    <div className="form-group">
                                        <input type="text" required className="form-control" name="nombre" value={formData.nombre} onChange={handleChangeInput} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre"/>
                                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                    </div>
                                    <div className="form-group">
                                        <input type="text" required className="form-control" name="apellido" value={formData.apellido} onChange={handleChangeInput} id="exampleInputPassword1" placeholder="Apellido"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" required className="form-control" name="email" value={formData.email} onChange={handleChangeInput} id="exampleInputPassword1" placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" required className="form-control" name="tel" value={formData.tel} onChange={handleChangeInput} id="exampleInputPassword1" placeholder="Telefono"/>
                                    </div>                                                        
                                    {/* <div className="form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button> */}
                                    <button disabled={[formData.nombre, formData.apellido, formData.email, formData.tel].includes('')} type="submit" className="btn btn-secondary btn-sm btn-block">Pagar</button>
                                </form>
                                :
                                <p>Compra exitosa, numero de seguimiento {compraId}</p>
                        }   

                        </div>
                </div>
            </div>
    
    </> );
}
 
export default Checkout;