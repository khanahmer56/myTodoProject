import React, { useCallback } from "react";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";

const TodoList = () => {
  const { users } = useSelector((state) => state);

  return (
    <div className="flex-[0.6]">
      <TodoHeader label={"List :Things to Buy"} />
      <TodoInput />
      {users?.map((user) => (
        <TodoCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default TodoList;
