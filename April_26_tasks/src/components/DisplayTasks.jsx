import React from "react";
import { useData } from "../context/customContext";
import Task from "./Task";

export default function DisplayTasks() {
  const { state } = useData();
  let defaultTask = {
    id: 0,
    data: "No Tasks, Add a Task...",
  };
  console.log(state);
  return (
    <div className="DisplayTasks">
      {state.length > 0 ? (
        state.map((task) => <Task task={task} key={task.id} />)
      ) : (
        <Task task={defaultTask} />
      )}
      {state.length ? (
        <div className="DisplayTasks-count">{state.length} item left</div>
      ) : null}
    </div>
  );
}
