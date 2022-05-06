import {Axios} from "axios";

export const fetchPkm = () => {

    return async (dispatch) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=50`)
            .then(res => res.json()).then(res => {
                dispatch({
                    type: "SET_DATA",
                    payload: res.results
                });
            })
    }
}

export const fetchPkmType = (type) => {
    return async (dispatch) => {
        let response = []
        let pokemons = []
        for (let i = 1; i < 50; i++) {
            response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`, 
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).json()

            if (response.data.types[0].type.name === type) {
                pokemons.push(JSON.parse(response.data))
                console.log(pokemons)
            }
            dispatch({
                type: "SET_TYPE",
                payload: pokemons
            });
        }
    }
}