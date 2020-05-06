import React from "react";
import { hot } from "react-hot-loader/root";
import Title from "./Title/Title";
import Container from "./Container/Container";
import TodoState from "./todoContext/TodoState";
import "./App.scss";

function App() {
  return (
    <div className='App'>
      <TodoState>
        <Title />
        <Container />
      </TodoState>
    </div>
  );
}

export default process.env.NODE_ENV === "development" ? hot(App) : App;
