import React from 'react'
import Navbar from './Components/Navbar'
import { Route,  Routes } from 'react-router-dom'
import ProductList from './Components/ProductList'
import Cart from './Components/Cart'
import { CartProvider } from './Context/CartContext'
const App = () => {
  return (
    <>
      <CartProvider>
      <Navbar/>
      <Routes>
      
      <Route path='/' element={<ProductList/>}/>
      <Route path='/cart' element={<Cart/>}/>

    </Routes>
      </CartProvider>
       
    </>
  )
}

export default App