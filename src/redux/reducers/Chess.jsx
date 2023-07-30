import { CHANGE_POSITION } from "../Types/Types";

const defaultState = {
    position: false
};

const ChessReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_POSITION:
      return {
        ...state,
        position: action.payload,
      };

    default:
      return state;
  }
};
export default ChessReducer;
