function Input({ task, setTask, setArr, arr, word }) {
  function taskSet(e) {
    setTask(e.target.value);
  }

  function clicked() {
    if (task.length === 5 && arr.length + 5 <= 25) {
      const newItems = task.split("").map((char) => ({
        item: char.toUpperCase(),
        success: word.indexOf(char.toUpperCase()) > -1,
      }));
      setArr((prevArr) => [...prevArr, ...newItems]);
      setTask("");
    }
  }

  return (
    <div className="forms">
      <label>Enter Word: </label>
      <input value={task} onChange={taskSet} type="text" />
      <button className="check" onClick={clicked}>
        Check
      </button>
    </div>
  );
}

export default Input;
