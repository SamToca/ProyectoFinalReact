
import './App.css';
import ItemListConteiner from './components/ItemList/ItemListConteiner';

import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListConteiner greeting="Bienvenidos a Militac - Indumentaria Táctica"/>
    </div>
  );
}

export default App;
