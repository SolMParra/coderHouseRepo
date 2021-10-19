import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Productos.css';
import logo from '../img/logo.svg';
import ItemListContainer from '../Components/ItemListContainer';

class Productos extends React.Component {

  render() {
    return (
      <React.Fragment >
        <div >
          <div >
            <div >
              <img
                src={logo}
                alt="Logo"
              />
            </div>
          </div>
        </div>
        <div >
          <div >
            <Link to="/new" className="btn btn-primary">
              No se encontro producto
            </Link>
          </div>
          <ItemListContainer />
        </div>
      </React.Fragment >

    );
  }
}

export default Productos;