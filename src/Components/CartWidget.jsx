import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const CartWidget = () => {
  const  state  = useContext(AppContext);
  const  cart  = state;

  return (
    <div>{cart.length > 0 && <div>{cart.length}</div>}
    </div>
  )
}

export default CartWidget;