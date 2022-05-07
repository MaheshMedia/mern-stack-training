import { ADD_DATA } from "../actions";

const initialState = {
  data: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_DATA: {
      return {
        ...state,
        data: [...state.data, payload],
      };
    }

    default: {
      return state;
    }
  }
};

export default rootReducer;
