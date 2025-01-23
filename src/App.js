import { CartContext } from './context/CartContext';
import './App.css';
import Navbar from './components/Navbar';
import Items from './components/Items';
import { useState } from 'react';

function App() {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  return (
    <CartContext.Provider value={{ total, setTotal, item, setItem }}>
      <div className="App">
        <h1>Shopping Cart</h1>
        <Navbar />
        <Items />
      </div>
    </CartContext.Provider>
  );
}

export default App;
