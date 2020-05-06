import React from "react";
import "./container.scss";
import UserInput from "../UserInput/UserInput";
import TodoList from "../TodoList/TodoList";

const Container = () => {
  return (
    <div className='container'>
      <UserInput />
      <TodoList />
    </div>
  );
};

export default Container;
