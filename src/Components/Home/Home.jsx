import Producto from '../Product/producto';

function Home() {

    const saludar = () => { alert('Holaaa');}

    return(
        <>
            {/* <h1>Hola soy Hero</h1>
            <button onClick={saludar}>Saludar</button> */}

                <Producto/>
        </>

    );
}

export default Home;