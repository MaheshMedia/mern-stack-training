import React from "react";
import { useData } from "../context/customContext";

export default function Task(props) {
  const { dispatch } = useData();

  const handleDelete = () => {
    dispatch({
      type: "delete",
      payload: {
        id: props.task.id,
      },
    });
  };

  return (
    <div className="Task">
      <h4 className="Task-data">{props.task.data}</h4>
      {props.task.id === 0 ? null : (
        <div className="Task-delete" onClick={handleDelete}>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
}
