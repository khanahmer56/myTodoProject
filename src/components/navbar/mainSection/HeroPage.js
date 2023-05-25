import React from "react";
import TodoList from "./todos/TodoList";
import EditTodo from "./todos/EditTodo";
import { useSelector } from "react-redux";

const HeroPage = () => {
  const state = useSelector((state) => state.users2);
  console.log("hello ahmer", state);
  return (
    <div className="w-full flex  gap-4">
      <TodoList />
      {Object.keys(state).length !== 0 && <EditTodo />}
    </div>
  );
};

export default HeroPage;
