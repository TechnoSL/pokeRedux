function reducer(state = [], action) {
    switch(action.type){
        case "SET_DATA":
            return action.payload;
        case "SET_TYPE":

        return state.map(state)
        default:
            return state;
        
    }
}
        
export default reducer;