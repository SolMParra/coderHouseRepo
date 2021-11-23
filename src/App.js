import './styles/App.css';
import Navbar from './Components/NavBar/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import imagen from './assets/sollogo.png';
import {useState} from 'react';
import Listado from './Components/ListProdHome/listadoProdHome';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import {Store} from './store';
import Checkout from './Components/Checkout/Checkout';

function App() {

  const [data,setData] = useState({
    items: [],
    cantidad: 0,
  });


  return (
    <div>
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
    </div>
  );
}

export default App;