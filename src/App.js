import { CartContextProvider } from './context/CartContext';
import './App.css';
import Navbar from './components/Navbar';
import Items from './components/Items';


function App() {

  return (
    <CartContextProvider>
      <div className="App">
        {/* <h1>Shopping Cart</h1> */}
        <Navbar />
        <Items />
      </div>
    </CartContextProvider>
  );
}

export default App;
