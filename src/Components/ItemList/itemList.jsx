import {useState, useEffect} from 'react';
import Producto from '../Product/producto';
import { useParams } from 'react-router-dom';
import firestore, { getFirestore } from '../../firebase';
import { data } from 'jquery';

const ItemList = () =>{

    // recibo el parametro

    const {id} = useParams();
    
    const [items, setItems] = useState([]);

    //declaro variable para aaceder a bd 
    const db = getFirestore();

    // Obtengo todos los productos si no pasan id de categoria
    const getProductsFromDB = () => {
        console.log("holA1")
        
        db.collection('productos').get()
       
        .then(docs =>{
            let arr = [];
            docs.forEach(doc => {
                arr.push({id: doc.id, data: doc.data()});
                console.log(doc.id);
                 console.log(arr, "array");
            })

            setItems(arr);
        })
        .catch(e => console.log(e));
    }


    // Obtengo los productos segun la categoria pasada por url
    const getProductsFromDBCategory = () => {
        
        
        db.collection('productos').where("category", "==", id).get()
        .then(docs =>{
            let arr = [];
            docs.forEach(doc => {
                arr.push({id: doc.id, data: doc.data()});
               
            })

            setItems(arr);
        })
        .catch(e => console.log(e));
    }    

    useEffect(() => {
        id ? getProductsFromDBCategory() : getProductsFromDB()

            console.log(items);
        
    }, [id]);   


    return (

        <>
                         <div className="row col-12">
                     {
                         items.length == 0 ?
                         
                         <h5 className="col-12 text-center mt-5" >No existen productos para esta categoria</h5> 
                           :
                                              
                         items.length > 0 ?
                         
                            items.map((item, index)=> (
   
                            <Producto 
                            key={item.id} 
                            id={item.id}
                            nombre={item.data.titulo} 
                            precio={item.data.precio} 
                            stock={item.data.stock}
                            img={item.data.img}/>
                            
                            ))
                         :
                         <h5 className="col-12 text-center mt-5" >cargando items...</h5>
                     }

                  
                </div>
        </>

    )
}


export default ItemList;