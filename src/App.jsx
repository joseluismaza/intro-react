import { useState } from "react";
import "./App.css";
import ShowCount from "./components/ShowCount";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <ShowCount count={count} />
      <button className="restar" onClick={decreaseCount}>
        Restar
      </button>
      <button className="sumar" onClick={increaseCount}>
        Sumar
      </button>
    </div>
  );
}

export default App;
