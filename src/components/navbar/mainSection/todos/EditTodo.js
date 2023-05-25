import React, { useEffect, useState } from "react";
import TodoHeader from "./TodoHeader";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../../../features/users/userSlice";

const EditTodo = () => {
  const [editTodo, setEditTodo] = useState({});
  const { users2 } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    setEditTodo(users2);
  }, [users2]);
  const handleSubmit = () => {
    dispatch(editUser(editTodo));
    setEditTodo({
      title: "",
      description: "",
    });
  };
  return (
    <div className="flex-[0.4]">
      <TodoHeader label={"Edit Todo"} />
      <div>
        <div className="bg-gray-700 text-white p-2 rounded-lg w-full m-2 text-center mb-2">
          <input
            type="text"
            className="w-[90%] rounded-lg p-2 m-2 bg-gray-700 outline-none text-white "
            onChange={(e) =>
              setEditTodo({ ...editTodo, title: e.target.value })
            }
            value={editTodo.title}
          />
        </div>
        <div className="bg-gray-700 text-white p-2 rounded-lg w-full m-2 text-center h-40">
          <input
            type="text"
            className="w-[90%] rounded-lg p-2 m-2 bg-gray-700 outline-none text-white"
            onChange={(e) =>
              setEditTodo({ ...editTodo, description: e.target.value })
            }
            value={editTodo.description}
          />
        </div>

        <button
          className="bg-blue-500 text-white w-full rounded-lg p-2 m-2"
          onClick={() => handleSubmit()}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default EditTodo;
