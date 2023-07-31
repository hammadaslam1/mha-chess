import { CHANGE_PAWN_POS } from "../Types/Types";

const defaultState = {
    pawnPosition: {
        x:0, y:0
    }
}
const ChessPawnReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_PAWN_POS:
            return(
                ...state,
                pawnPosition: action.payload,
            )
    
        default:
            return state;
    }
}
 
export default ChessPawnReducer;