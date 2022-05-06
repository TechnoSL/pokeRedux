import react from "react";
import Card from "../card/index";
import './index.css';  
const CardHolder = ({poke, loading}) => {

    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div className="cardHolder">
            {poke.map(poke => {
                return <Card pokeData={poke}/>
            })}
        </div>
    );
}


export default CardHolder;