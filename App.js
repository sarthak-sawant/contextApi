import React, { useContext } from 'react';
import Header from './Header';
import ProductCard from './ProductCart';
import CartContext from './card-context';

const sampleProducts = [
  { id: 1, title: 'Cool T-shirt', price: 29.99 },
  { id: 2, title: 'Sneakers', price: 59.99 },
  { id: 3, title: 'Backpack', price: 39.99 },
];

const App = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <Header />
      <div>
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <ul>
      {cartItems.map((item,index) => (
            <li key={index}>
            {item.title} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
