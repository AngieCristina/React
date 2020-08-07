import React from "react";
import Modal from "./Modal.js";


function App() {
 /* const [task, setTask] = React.useState("");
  const [listTask, setListTask] = React.useState([]);
  */
  const [show, setShow] = React.useState(false);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

/*  function handleSubmit() {
    const newList = [...listTask, task];
    setListTask(newList);
    setTask("");
  }

  function handleChange(event) {
    setTask(event.target.value);
  }

  return (
    <div>
      <input placeholder="to-do" onChange={handleChange} value={task} />
      <button onClick={handleSubmit}>submit</button>
      <ol>
        <ul>
          {listTask.map((element) => (
            <li>{element}</li>
          ))}
        </ul>
      </ol>
    </div>
  );
*/
  return (
    <div className="App">
      <h1>Creating react modal</h1>
      {!show && <button onClick={openModal}>Show modal</button>}
      <Modal closeModal={closeModal} show={show} />
    </div>
  );
}

export default App;
