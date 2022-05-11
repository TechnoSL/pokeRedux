import React, {useState, useEffect} from "react";
import "./index.css"

const Card = ({pokeData,_min,_max}) => {
    
    const [pokemon,setPokemon] = useState({});
    useEffect(()=>{
        if(pokeData.url !== undefined){
        const data = fetch(`${pokeData.url}`)
        .then(res => res.json()).then(res => {
            setPokemon(res);
        });
        return
    }
    setPokemon(pokeData);
    },[pokeData]);

    if (Object.keys(pokemon).length === 0) {
        return <h1>Loading...</h1>
    }

    
    return (
        <div className="Card">
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} width="200px" height="200px" alt={pokemon.name}/>
        </div>
    );
}

export default Card;