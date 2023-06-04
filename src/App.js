import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from "./components/ItemDetailContainer";
import Contacto from "./components/Contacto";
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

import { CartProvider } from './Context/CartContext';
import Carrito from './components/Carrito';










function App() {



 
  return (
    <div className="App">
    <CartProvider>
      <BrowserRouter>
        <NavBar />
    
         <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemListContainer/>} />
            <Route path="/productos/:category" element={<ItemListContainer/>} />
            <Route path='/Contacto' element={<Contacto/>} />
            <Route path='/carrito' element={<Carrito/>} />
      
          </Routes>
     
    
    

      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;


