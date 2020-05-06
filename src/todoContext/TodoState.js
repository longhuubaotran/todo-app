import React, { useReducer } from "react";
import TodoContext from "../todoContext/TodoContext";
import todoReducer from "../todoContext/TodoReducer";

const TodoState = (props) => {
  const initialState = [{ id: 1, todo: "hello" }];
  const [todoList, dispatch] = useReducer(todoReducer, initialState);
  const addTodo = (todo) => {
    console.log(todo);
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const delTodo = (todoId) => {
    dispatch({ type: "DEL_TODO", payload: todoId });
  };

  return (
    <TodoContext.Provider value={{ todoList, addTodo, delTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
