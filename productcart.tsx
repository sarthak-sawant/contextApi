import React, { useContext } from 'react';
import CartContext from './card-context';

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={() => removeFromCart(product.id)} >
        Remove
      </button>
    </div>
  );
};

export default ProductCard;

