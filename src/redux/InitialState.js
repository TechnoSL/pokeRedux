const State = fetch("https://pokeapi.co/api/v2/pokemon/?limit=50")
    .then(res => res.json()).then(res => res.results)

export const InitialState = State;