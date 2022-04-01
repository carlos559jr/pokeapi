import { HashRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import './App.css';
import PokedexInfo from './components/PokedexInfo';
import Pokedex from './components/Pokedex';
import ProtectedRoutes from './components/ProtectedRoutes';


function App() {
  
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route element={ <ProtectedRoutes />} >
            <Route path='/pokedex'  element={<Pokedex />} />
            <Route path='/pokedex/:id' element={<PokedexInfo />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
