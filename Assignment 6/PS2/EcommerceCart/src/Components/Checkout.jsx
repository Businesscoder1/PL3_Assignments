// src/components/Checkout.jsx
import React from 'react';
import { useCart } from '../Context/CartContext';

const Checkout = () => {
  const { state } = useCart();
  const { totalPrice } = state;

  return (
    <div>
      <h2>Checkout</h2>
      <p>Your total is: ${totalPrice}</p>
      <p>Thank you for your purchase!</p>
    </div>
  );
};

export default Checkout;
