import React, { useContext, useState } from "react";
import "./userInput.scss";
import todoContext from "../todoContext/TodoContext";

const UserInput = () => {
  const { addTodo } = useContext(todoContext);
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleAddTodo = (e) => {
    e.preventDefault();
    addTodo({ id: Math.floor(Math.random() * 100) + 4, todo: input });
    setInput("");
  };
  return (
    <form className='form'>
      <input
        type='text'
        className='todo-input'
        value={input}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button
        className='todo-btn'
        onClick={(e) => {
          handleAddTodo(e);
        }}>
        <i className='fas fa-plus-square'></i>
      </button>
    </form>
  );
};

export default UserInput;
