import React, { useContext } from 'react';
import CartContext from './card-context';

const Header = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <header>
      <h1>My E-Commerce Store</h1>
      <div>
        🛒 Cart ({cartItems.length})
      </div>
    </header>
  );
};

export default Header;

