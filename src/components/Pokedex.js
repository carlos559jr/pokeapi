import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';


const Pokedex = () => {

  const userName = useSelector((state) => state.userName);

  const [pokemonName, setPokemonName] = useState("")
  const [types, setTypes] = useState([])

  const navigate = useNavigate()

  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const itemsNumber = 9;
  const lastIndex = page * itemsNumber;
  const firstIndex = lastIndex - itemsNumber;
  const pokemonPaginated = pokemons?.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(pokemons?.length / itemsNumber);
  const pagesNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pagesNumbers.push(i);
  }

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1226/")
      .then((res) => setPokemons(res.data.results));
    
    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then((res) => setTypes(res.data.results) )  
  }, []);

  const submit = e => {
    e.preventDefault()
    navigate(`/pokedex/${pokemonName}/`)
  }
  
  const handleType = e => {
      axios.get(e.target.value)
      .then(res => setPokemons(res.data?.pokemon) )

  }
  
   
  return (
        
    <div>
      <header>
        <div className='rojo'></div>
        <div className='negro'></div>
      </header>
      <h5><span>Bienvenido {userName}, </span>  aquí podrás encontrar tu pokemón favorito  </h5>


      <form className="input-container" onSubmit={submit}>
        <label htmlFor="pokemon-name"></label>
        <input
          placeholder='Busca un pokemón'
          type="text"
          id='pokemon-name'
          value={pokemonName}
          onChange={e => setPokemonName(e.target.value) }
        />
        <button>Buscar</button>
      </form>

      <div>
        <select className="select"onChange={handleType} >
        <option> Selecciona una ubicacion</option>
          {
            types.map(Type => (
              <option key={Type.name} value={Type.url}>{Type.name} </option>
            ))
          }
        </select>
      </div>
          <div className='card'>

            {pokemonPaginated?.map((pokemon) => (
              
              <PokemonCard
                pokemonUrl={pokemon.url ? pokemon.url: pokemon.pokemon.url}
                key={pokemon.url ? pokemon.url: pokemon.pokemon.url}
              />
            ))}
          </div >
          <div className='paginas'>
            <button onClick={() => setPage(page - 1)} disabled={page <= 1}>
            🢀
            </button>
            <p> {page} / {totalPages }</p> 
            <button onClick={() => setPage(page + 1)} disabled={page >= totalPages}>
            🢂
            </button>  
          </div>
    </div>


  );
};

export default Pokedex;<h1>Pokedex </h1>