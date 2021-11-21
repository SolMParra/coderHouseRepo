import Carro from '../Global/carro';
import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { Store } from '../../store';
import { getFirestore } from '../../firebase';


function Navbar(imagen) {

    const [cate, setCate] = useState([]);
    const [data, setData] = useContext(Store);
    const db = getFirestore();

    const getCategoriasFromDB = () => {

        db.collection('categorias').orderBy("nombre", "asc").get()

            .then(docs => {

                let arra = [];
                docs.forEach(doc => {
                    arra.push({ id: doc.id, data: doc.data() })
                    console.log(doc.id);

                })

                setCate(arra);

            })
            .catch(e => console.log(e))
    }

    useEffect(() => {
        getCategoriasFromDB();

    }, []);

    return (

        <>
            <nav className="navbar fixed-top  navbar-expand-lg navbar-light navbar-fondo ">
                <a className="navbar-brand" href="#"><Link to={'/'}><img src={imagen.src} alt="ImagenPrincipal" />  </Link></a>

                {
                    cate.map((item, index) => (


                        <Link key={item.id} className="nav-link" to={`/category/${item.data.nombre}`}>{item.data.nombre}</Link>      //+'-'+item.nombre                               

                    ))
                }

                <Carro />

            </nav>
            
        </>


    );


}


export default Navbar;