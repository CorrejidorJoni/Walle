import './App.css';


import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';





function App() {
  return (
    <div className="App">
    <BrowserRouter>

     <NavBar />

     <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/category/:id" element={<ItemListContainer/>}/>
      
      
     </Routes>


     <ItemListContainer />

    </BrowserRouter> 
    </div>
  );
}

export default App;


