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
                 console.log(data);
            })

            setItems(arr);
        })
        .catch(e => console.log(e));
    }


    // Obtengo los productos segun la categoria pasada por url
    const getProductsFromDBCategory = () => {
        
        
        db.collection('productos').where("categoryName", "==", id).get()
        .then(docs =>{
            let arr = [];
            docs.forEach(doc => {
                arr.push({id: doc.id, data: doc.data()});
                // console.log(doc.id);
                // console.log(doc.data());
            })

            setItems(arr);
        })
        .catch(e => console.log(e));
    }    

    useEffect(() => {
        id ? getProductsFromDBCategory() : getProductsFromDB()

            console.log(items);
        
    }, [id]);   






    

    // constante es una API
    // const  products = [

    //     {
    //         id: 1,
    //         titulo: 'Bujia',
    //         category: '1',
    //         descripcion: '',
    //         precio: 1100
    //     },
    //     {
    //         id: 2,
    //         titulo: 'bujia 2',
    //         category: '1',
    //         descripcion: '',
    //         precio: 600
    //     },
    //     {
    //         id: 3,
    //         titulo: 'Amortiguador',
    //         category: '2',            
    //         descripcion: '',
    //         precio: 900
    //     },
    //     {
    //         id: 4,
    //         titulo: 'Axial',
    //         category: '3',            
    //         descripcion: '',
    //         precio: 800
    //     },
    //     {
    //         id: 5,
    //         titulo: 'Axial 2',
    //         category: '3',            
    //         descripcion: '',
    //         precio: 1000
    //     }
    // ];

    // const getProducts = new Promise((resolve, reject)=>{
    //     setTimeout(()=>{ resolve(products); },2000);
    // } );


    //  const llamarProductos = () => {
    //     getProducts.then((resp) =>{

    //         const productosCategoria = resp.filter(produc => produc.category === id);
    //         if(productosCategoria.length>0){
    //             setItems(productosCategoria);
    //         }else{
    //             setItems(resp);
    //         }
    //     });
    //  }

    // useEffect(() => { setItems([]); llamarProductos();} , [id]);    
    

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

                    {/* <Producto nombre='Bujia' precio='500' stock='10'/>
                    <Producto nombre='Alternador' precio='200' stock='15' />
                    <Producto nombre='Amortiguador' precio='350' stock='10'/>
                    <Producto nombre='Correa' precio='4500' stock='10'/>
                    <Producto nombre='Axial' precio='7000' stock='10'/> */}
                </div>
        </>

    )
}


export default ItemList;