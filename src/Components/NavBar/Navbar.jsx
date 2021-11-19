import Carro from '../Global/carro';
import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import {Store} from '../../store';
import  {getFirestore} from '../../firebase';

function Navbar(imagen){

    const [cate, setCate] = useState([]);
    const [data,setData] = useContext(Store);
    const db = getFirestore();

//     const categorias = [
//         {
//             id : 1,
//             nombre : 'Bujias'
//         },
//         {
//             id : 2,
//             nombre : 'Amortiguadores'
//         },
//         {
//             id : 3,
//             nombre : 'Axial'
//         },
//         {
//             id : 4,
//             nombre : 'Accesorios'
//         },
//         {
//             id : 5,
//             nombre : 'Acc. Portalones'
//         }          
// ];

    const getCategoriasFromDB = () =>{

        db.collection('categorias').orderBy("nombre", "asc").get()
        
        .then(docs => {

            let arra = [];
            docs.forEach(doc =>{
                arra.push({id: doc.id, data: doc.data()})
                console.log(doc.id);
                console.log(doc.data())
            })

            setCate(arra);

        })
        .catch(e => console.log(e))
    }

    // const getAllCategoria = new Promise((resolve, reject)=>{
    //     resolve(categorias);
    // });


    useEffect(()=>{

           getCategoriasFromDB(); 

        // getAllCategoria.then(resp =>{
        //     setCate(resp);
        // });

    },[]);


    // const CantEnCarro = () => {

    //     if(data.cantidad==0){
    //         unmountComponentAtNode(document.getElementById('idcarrito'));
    //     }
    // }

    //CantEnCarro();

    return(

        // navbar-dark bg-dark
        <>
            <nav className="navbar navbar-expand-lg navbar-light navbar-fondo"> 
                <a className="navbar-brand" href="#"><Link to={'/'}><img src={imagen.src} alt="ImagenPrincipal"/></Link></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Categorias
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {
                                cate.map((item, index)=>(

                                    
                                    <Link key={item.id} className="dropdown-item" to={`/category/${item.data.nombre}`}>{item.data.nombre}</Link>      //+'-'+item.nombre                               

                                ))
                            }
                        </div>
                    </li>

                    </ul>
                    <Carro/>
                </div>                
            </nav>
        </>


    );


}


export default Navbar;