import React, { useReducer } from "react";

type TAction = {
  type: "addName" | "addEmail";
  payload: string;
};

const initialState = {
  name: "",
  email: "",
};

const reducer = (currState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "addName":
      return {
        ...currState,
        name: action.payload,
      };
    case "addEmail":
      return {
        ...currState,
        email: action.payload,
      };
    default:
      return currState;
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOnsubmitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div className="">
      <form onSubmit={handleOnsubmitForm} className="space-x-2">
        <input
          className="border py-2 border-white"
          type="text"
          name="name"
          id=""
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
        />
        <input
          className="border py-2 border-white"
          type="text"
          name="email"
          id=""
          onChange={(e) =>
            dispatch({ type: "addEmail", payload: e.target.value })
          }
        />

        <button type="submit">Anmeldung</button>
      </form>
    </div>
  );
};

export default UseReducerExample;
