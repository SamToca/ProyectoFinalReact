import ItemListConteiner from './components/ItemList/ItemListConteiner';
import Contador from './components/Contador/Contador';
import NavBar from './components/NavBar/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";



export default function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListConteiner greeting="Bienvenidos a Militac - Indumentaria Táctica"/>
      <div className="text-center">
      <Contador inicial = {1} stock = {10} />
      </div>
    </div>
  );
}


