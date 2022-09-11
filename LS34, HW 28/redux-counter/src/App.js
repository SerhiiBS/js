import {increment, decrement} from "./engine/core/counter/slice";
import {useDispatch, useSelector} from "react-redux";


function App() {

    const dispatch = useDispatch();
    const selector = useSelector(state => state.counter.count);
    const plus = () => dispatch(increment());
    const minus = () => dispatch(decrement());


  return (
    <div className="App">
        <span>
          <p>Count: {selector}</p>
          <button onClick={plus} >+</button>
          <button onClick={minus} >-</button>
        </span>
    </div>
  );
}

export default App;
