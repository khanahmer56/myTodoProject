import React from "react";

const TodoHeader = ({ label }) => {
  return (
    <div className="bg-gray-700 text-white p-2 rounded-lg w-full m-2 text-center">
      <h1>{label}</h1>
    </div>
  );
};

export default TodoHeader;
