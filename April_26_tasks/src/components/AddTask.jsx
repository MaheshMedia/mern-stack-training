import React, { createRef, useState } from "react";
import { useData } from "../context/customContext";

export default function AddTask() {
  const [toggle, setToggle] = useState(false);

  const [data, setData] = useState("");

  //get dispatch from custom useData hook

  const { dispatch } = useData();

  //ref to toggle className of form
  const formRef = createRef();
  const btnRef = createRef();

  //handles toggle for conditional display
  const handleToggle = () => {
    setToggle(!toggle);
    setData("");
    btnRef.current.classList.toggle("active-btn");
    formRef.current.classList.toggle("active-form");
    toggle
      ? formRef.current.children[0].blur()
      : formRef.current.children[0].focus();
  };

  //handles addition of tasks
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "add",
      payload: {
        data,
      },
    });

    handleToggle();
  };

  //handles empty dispatch of tasks
  const handleEmpty = () => {
    dispatch({
      type: "empty",
    });
  };

  return (
    <div className="AddTask">
      <form className="AddTask-form" ref={formRef} onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Enter a task"
          required
          onChange={(e) => setData(e.target.value)}
          value={data}
        />
        {/* <input type="submit" value="Submit" style={{ display: "none" }} /> */}
      </form>
      <div className="AddTask-btn">
        <button onClick={handleToggle} ref={btnRef}>
          {toggle ? "Cancel" : "Add"}
        </button>
        {toggle ? null : <button onClick={handleEmpty}>Empty</button>}
      </div>
    </div>
  );
}
