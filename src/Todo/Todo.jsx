import React, { useState, useContext } from "react";
import "./todo.scss";
import todoContext from "../todoContext/TodoContext";

const Todo = (props) => {
  const [completed, setCompleted] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const { delTodo } = useContext(todoContext);

  const handleCompleteBtn = () => {
    setCompleted(true);
  };

  const handleDeleteBtn = () => {
    setDeleted(true);
  };

  const handleTransEnd = () => {
    console.log(props.id);
    delTodo(props.id);
    console.log("deleted");
  };

  return (
    <div
      className={`todo ${completed == false ? "" : "completed"} ${
        deleted == false ? "" : "deleted"
      }`}
      onTransitionEnd={deleted ? handleTransEnd : null}>
      <li>{props.todo}</li>
      <button className='complete-btn' onClick={handleCompleteBtn}>
        <i className='fas fa-check'></i>
      </button>
      <button className='trash-btn' onClick={handleDeleteBtn}>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
};

export default Todo;
