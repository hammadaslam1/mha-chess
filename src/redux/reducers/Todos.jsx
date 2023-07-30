import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../Types/Types";

const defaultState = {
  todos: [],
};

const TodoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: action.payload,
      };
    case DELETE_TODO:
      return {
        todos: action.payload,
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: action.payload,
      };

    default:
      return state;
  }
};
export default TodoReducer;
