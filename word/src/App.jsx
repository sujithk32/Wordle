import { useState } from "react";
import Container from "./container";
import Input from "./input";

function App() {
  const [task, setTask] = useState("");
  const [arr, setArr] = useState([]);
  let word = "READY";
  function removed() {
    setArr([]);
  }

  return (
    <div className="top">
      <Container arr={arr} />
      <Input
        task={task}
        setTask={setTask}
        setArr={setArr}
        arr={arr}
        word={word}
      />
      <button onClick={removed} className="btn">
        Reset
      </button>
    </div>
  );
}

export default App;
