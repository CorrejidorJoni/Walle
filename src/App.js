import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Image from './components/Image';





function App() {
  return (
    <div className="App">
      
     <NavBar />
     <ItemListContainer texto='Bienvenidos a Walle Argentina'/>
     <Image />
     

    </div>
  );
}

export default App;


