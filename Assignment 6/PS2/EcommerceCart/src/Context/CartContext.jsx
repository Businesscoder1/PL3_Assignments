// src/context/CartContext.jsx
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const updatedItems = [...state.items, action.payload];
      const updatedTotalPrice = updatedItems.reduce((total, item) => total + item.price, 0);
      return { items: updatedItems, totalPrice: updatedTotalPrice };

    case 'REMOVE_FROM_CART':
      const filteredItems = state.items.filter(item => item.id !== action.payload.id);
      const newTotalPrice = filteredItems.reduce((total, item) => total + item.price, 0);
      return { items: filteredItems, totalPrice: newTotalPrice };

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
