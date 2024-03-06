import { useReducer } from "react";
import Counter from "./Counter";


type CounterState = {
  count: number;
  error: string | null;
};

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

type CounterAction = UpdateAction | ResetAction;

const initialState: CounterState = { count: 0, error: null };

function reducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case "increment": {
      const newState = state.count + action.payload;
      const error = newState > 5 ? "Max har överskridits" : null;
      return { count: error ? state.count : newState, error: error };
    }
    case "decrement": {
      const newState = state.count - action.payload;
      const error = newState < 0 ? "Min har överskridits" : null;
      return { count: error ? state.count : newState, error: error };
    }
    case "reset": {
      return initialState;
    }
    default:
      return state;
  }
}

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddCounter = () => {
    dispatch({ type: "increment", payload: 1 });
  };

  const handleRemoveCounter = () => {
    dispatch({ type: "decrement", payload: 1 });
  };

  return (
    <div className="counter">
      <Counter/>
        <h2>Counter med reducer</h2>
      <div className="count">
        {state.error ? <div style={{backgroundColor: "red", padding: "20px"}}>{state.error}</div>: <div style={{backgroundColor: "blue" , padding: "20px"}}>{state.count}</div>}
      </div>
      <button onClick={handleRemoveCounter}>Remove</button>
      <button onClick={handleAddCounter}>Add</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default CounterWithReducer;
