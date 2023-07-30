import { ADD_USER } from "../Types/Types";

const defaultState = {
  user: false
};

const UserReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
export default UserReducer;
