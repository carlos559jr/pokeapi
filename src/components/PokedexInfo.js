import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokedexInfo = () => {

    const {id} = useParams()
    const [pokemon, setPokemon] = useState({})

    useEffect( () =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => setPokemon(res.data))
    },[id])

    return (
    <>
        <header>
                <div className='rojo'></div>
                <div className='negro'></div>
             </header>
        <div className='pokemon-info'>
            <section className='header-info' >
                <p><img src={pokemon.sprites?.other.dream_world.front_default} alt="pokemon" /> </p>
            </section>
            <section className='info-principal'>
                <p># {pokemon.id} </p>
                <h1>{pokemon.name} </h1>
                <div className='dimentions'>
                    <div>Weight <br /> <br /> {pokemon.weight} </div>
                    <div>Height <br /> <br /> {pokemon.height} </div>
                </div>
                <div className='type'>
                    <div>
                        <h3>Type</h3>
                        <div>
                            <p>{pokemon.types?.[0].type.name } </p> 
                        </div>   
                    </div>
                    <div>
                        <h3>Skill</h3>
                        <div>
                            <p>{pokemon.abilities?.[0].ability.name } </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    
    
    
    </>
    );
};

export default PokedexInfo;<h1>pokedex info</h1>