import {
  decrement,
  decrementByFive,
  increment,
  incrementByFive,
} from "./app/redux/features/counter-slice";
import { useAppDispatch, useAppSelector } from "./app/redux/hooks";

const App = () => {
  // const [counter, setCounter] = useState(0);

  // TODO: selector
  const { count } = useAppSelector((state) => state.counter);

  // TODO: dispatch hooks call
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-slate-100">
      <div className="flex items-center justify-center gap-5 border bg-slate-200/70 p-32 rounded-lg">
        <button
          onClick={() => dispatch(incrementByFive({ value: 5 }))}
          className="px-5 py-2 bg-green-500 rounded-lg text-white"
        >
          Increment by 5
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-5 py-2 bg-green-500 rounded-lg text-white"
        >
          Increment
        </button>
        <h1 className="text-2xl font-bold">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-5 py-2 bg-red-500 rounded-lg"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(decrementByFive({ value: 5 }))}
          className="px-5 py-2 bg-red-500 rounded-lg"
        >
          Decrement by 5
        </button>
      </div>
    </div>
  );
};

export default App;
