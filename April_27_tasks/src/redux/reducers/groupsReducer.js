const initialState = {
  data: [],
};

const groupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "groups/create": {
      return {
        ...state,
        data: [...state.data, payload],
      };
    }
    case "groups/delete": {
      return {
        ...state,
        data: state.data.filter((entry) => entry.id !== payload.id),
      };
    }

    default: {
      // throw new Error("Unhandled action in groupReducer");
      return state;
    }
  }
};

export default groupReducer;
