import React, { useContext } from "react";
import "./todoList.scss";
import Todo from "../Todo/Todo";
import todoContext from "../todoContext/TodoContext";

const TodoList = () => {
  const { todoList } = useContext(todoContext);
  return (
    <div className='todo-list-container'>
      <ul className='todo-list'>
        {todoList.map((item) => (
          <Todo todo={item.todo} key={item.id} id={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
