import { ADD_FAVORITE, DELETE_FAVORITE } from "./actionsTypes";

const initialState = {
    myFavorites: [],
};

const reducer = (state = initialState, actions) => {
    switch(actions.type){
        case ADD_FAVORITE:
            const isDuplicate = state.myFavorites.find((char) => char.id === actions.payload.id);

            if(isDuplicate){
                return {...state};
            }else{
                return {
                    ...state,
                    myFavorites: [...state.myFavorites, actions.payload],
                }
            }
            
        
        case DELETE_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.myFavorites, state.myFavorites.filter((char) => char.id !== actions.payload)]
            }
            
        default:
            return state;
    }
};

export default reducer;

