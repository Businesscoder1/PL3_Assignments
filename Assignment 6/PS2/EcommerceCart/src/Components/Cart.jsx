// src/components/Cart.jsx
import React from 'react';
import { useCart } from '../Context/CartContext';

const Cart = () => {
  const { state, dispatch } = useCart();
  const { items, totalPrice } = state;

  const removeFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  return (
    <div className='text-white'>
      <h2 className='text-white'>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className='card-item'>
          {items.map(item => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <button className='bg-red-400 w-20 rounded-md hover:bg-red-500' onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          ))}
          <h3>Total Price: ${totalPrice}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
