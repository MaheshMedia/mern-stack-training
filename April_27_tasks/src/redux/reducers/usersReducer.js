const initialState = {
  data: [],
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "users/create": {
      return {
        ...state,
        data: [...state.data, payload],
      };
    }
    case "users/delete": {
      return {
        ...state,
        data: state.data.filter((entry) => entry.id !== payload.id),
      };
    }

    default: {
      // throw new Error("Unhandled action in usersReducer");
      return state;
    }
  }
};

export default usersReducer;
