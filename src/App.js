import './styles/App.css';
import Navbar from './Components/NavBar/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import imagen from './assets/gabtec-logo_135.gif';
import {useState} from 'react';
import Listado from './Components/ListProdHome/listadoProdHome';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import {Store} from './store';
import Checkout from './Components/Checkout/Checkout';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {

  const [data,setData] = useState({
    items: [],
    cantidad: 0,
  });


  return (
    <>
    <Store.Provider value={[data,setData]}>
      <BrowserRouter>
        <Navbar src={imagen}/>
        <Switch>
            <Route exact path="/">
              <Listado titulo="Productos destacados" />
            </Route>
            <Route exact path="/category/:id">
              <Listado titulo="Categoria" />
            </Route>          
            <Route path="/detail/:idProducto?"> {/* /:id -> (Parametro obligatorio), /:id? -> opcional */}
              <ItemDetailContainer/>
            </Route>
            <Route path="/cart">
              <Cart/>
            </Route>  
            <Route path="/checkout">
              <Checkout/>
            </Route>         
            <Route path="*">
              <Listado/>
            </Route>          
        </Switch>
      </BrowserRouter>
    </Store.Provider>
    </>
  );
}

export default App;