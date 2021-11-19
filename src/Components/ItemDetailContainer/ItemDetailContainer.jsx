import ItemDetail from '../ItemDetail/itemDetail';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import firestore, { getFirestore } from '../../firebase';


const ItemDetailContainer = () => {

    // declaro el state
    const [prod, setProd] = useState([]);
    const db = getFirestore();

    //recibo parametro del id del producto
    const {idProducto} = useParams();

    // constante es una API
    // const  products = [

    //     {
    //         id: 1,
    //         titulo: 'Bujia',
    //         category: '1',
    //         descripcion: 'Resistencia normal',
    //         precio: 1100,
    //         stock: 10
    //     },
    //     {
    //         id: 2,
    //         titulo: 'bujia 2',
    //         category: '1',
    //         descripcion: 'Resistencia premiun',
    //         precio: 600,
    //         stock: 20
    //     },
    //     {
    //         id: 3,
    //         titulo: 'Amortiguador',
    //         category: '2',            
    //         descripcion: 'Delantero para chevrolet luv',
    //         precio: 900,
    //         stock: 30
    //     },
    //     {
    //         id: 4,
    //         titulo: 'Axial',
    //         category: '3',            
    //         descripcion: 'Tren delantero 1',
    //         precio: 800,
    //         stock: 40
    //     },
    //     {
    //         id: 5,
    //         titulo: 'Axial 2',
    //         category: '3',            
    //         descripcion: 'Tren delantero 2',
    //         precio: 1000,
    //         stock: 50
    //     }
    // ];

    // creo una funcion que devuelva una promesa con un delay de 2 segundos
    // const getProduct = new Promise((resolve, reject)=>{
    //     setTimeout(()=>{
    //         const productoDetail = products.find(product => product.id == idProducto);
    //         //console.log(productoDetail);
    //             resolve(productoDetail);
    //     },2000);
    // });

    // Utilizo el UseEffect para setear el estado prod
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
