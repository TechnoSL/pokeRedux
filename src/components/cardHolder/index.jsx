import React from "react";
import Card from "../card/index";
import './index.css';  
const CardHolder = ({poke, loading}) => {

    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div className="cardHolder">
            {poke.map(p=> {
                return <Card pokeData={p}/>
            })}
        </div>
    );
}


export default CardHolder;