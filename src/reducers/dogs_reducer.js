import {
  GET_DOG_BEGIN,
  GET_DOG_SUCCESS,
  GET_DOG_ERROR,
  HANDLE_SEARCH,
} from "../constant/actionTypes";

const dogs_reducer = (state, action) => {
  if (action.type === GET_DOG_BEGIN) {
    return { ...state, dogs_loading: true };
  }
  if (action.type === GET_DOG_SUCCESS) {
    return {
      ...state,
      dogs_loading: false,
      dogs: action.payload,
    };
  }
  if (action.type === HANDLE_SEARCH) {
    return {
      ...state,
      searchTerm: action.payload,
    };
  }
  if (action.type === GET_DOG_ERROR) {
    return { ...state, dogs_loading: false, dogs_error: true };
  }
};

export default dogs_reducer;
