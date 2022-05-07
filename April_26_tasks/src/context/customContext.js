import { createContext, useContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskContext = createContext();

//reducer
let reducer = (state, action) => {
  switch (action.type) {
    case "add": {
      let task = {
        id: uuidv4(),
        data: action.payload.data,
      };
      return [...state, task];
    }
    case "delete": {
      return state.filter((task) => task.id !== action.payload.id);
    }

    case "empty": {
      return [];
    }

    default: {
      throw new Error("Unhandled action");
    }
  }
};

//custom provider
export const TaskProvider = ({ children }) => {
  let initialState = [];
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

//custom hook to get data
export const useData = () => {
  const { state, dispatch } = useContext(TaskContext);

  return { state, dispatch };
};
