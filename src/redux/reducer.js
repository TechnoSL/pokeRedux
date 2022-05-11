function reducer(state = [], action) {
    switch(action.type){
        case "SET_DATA":
            return state = action.payload;
        case "SET_TYPE":
            return state;
        default:
            return state;
        
    }
}
        
export default reducer;