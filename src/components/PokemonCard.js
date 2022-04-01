import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ( {pokemonUrl} ) => {

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        axios.get(pokemonUrl )
            .then(res => {setPokemon(res.data) })
    } ,[pokemonUrl] )

    console.log(pokemon)
    return (
        <div className='card-list'>
            <ul>
               <li key={pokemon.id}>
                   <div>
                        <Link to={`/pokedex/${pokemon.id}`}>
                            <img className='image-pokemon' src={pokemon.sprites?.other.dream_world.front_default} alt="pokemon" />
                            <h2>{pokemon.name}</h2>
                            <p><b>Tipo:</b> {pokemon.types?.[0].type.name}</p>
                        </Link>
                   </div>
                    <div className='card-info'>
                        <p><b>Hp</b> <br /> <br />  {pokemon.stats?.[0].base_stat} </p>
                        <p><b>Attack</b><br /><br /> {pokemon.stats?.[1].base_stat} </p>
                        <p><b>Defense</b> <br /><br />  {pokemon.stats?.[2].base_stat} </p>
                        <p><b>Speed</b><br /><br /> {pokemon.stats?.[5].base_stat} </p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default PokemonCard;