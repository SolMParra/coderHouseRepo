import ItemDetail from '../ItemDetail/itemDetail';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import firestore, { getFirestore } from '../../firebase';


const ItemDetailContainer = () => {

  
    const [prod, setProd] = useState([]);
    const db = getFirestore();

   
    const {idProducto} = useParams();

   
    useEffect(() => {

        console.log('antes de buscar',prod);

            db.collection('productos').doc(idProducto).get()
            .then(doc => {
                if(doc.exists){
                    console.log(doc.data())
                    setProd(doc.data());
                }else{
                    setProd(0);
                    console.log('no existe el producto', prod);
                }
                
                
            })
            .catch(e => console.log(e));
            console.log('despues de buscar',prod);
        
    }, []);


    console.log(typeof(prod),'tipo de prod');

    return (
        <>
        {
         prod!='' ? 
        <ItemDetail  item={prod} />
        :
        <h5 className="col-12 text-center mt-5" >Cargando Detalle...</h5>
        }
        </>
    )
};


export default ItemDetailContainer;
