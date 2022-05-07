const initialState = {
  data: [],
};

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "products/create": {
      return {
        ...state,
        data: [...state.data, payload],
      };
    }
    case "products/delete": {
      return {
        ...state,
        data: state.filter((entry) => entry.id !== payload),
      };
    }

    default: {
      // throw new Error("Unhandled action in productsReducer");
      return state;
    }
  }
};

export default productsReducer;
