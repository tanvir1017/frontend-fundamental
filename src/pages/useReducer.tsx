import { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (initialState, action) => {
  switch (action.type) {
    case "increment":
      return { count: initialState.count + 1 };
    case "decrement":
      return { count: initialState.count - 1 };

    default:
      return initialState;
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="space-x-2">
      <h2>{state.count}</h2>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="bg-purple-400 text-black"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="bg-purple-800"
      >
        Decrement
      </button>
    </div>
  );
};

export default UseReducerExample;
