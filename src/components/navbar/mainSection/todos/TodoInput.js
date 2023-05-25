import React from "react";
import { GoPlus } from "react-icons/go";
import { TbMoneybag } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { addUser } from "../../../../features/users/userSlice";

const TodoInput = () => {
  const [todo, setTodo] = React.useState({});
  const dispatch = useDispatch();
  const handleTodo = () => {
    dispatch(addUser({ id: Date.now(), ...todo }));
    setTodo({
      title: "",
      description: "",
    });
  };
  return (
    <div>
      <div className=" bg-gray-800 rounded-lg m-2 w-full p-2 ">
        <div className="flex w-full items-center">
          <span className="bg-pink-200 rounded-[50%] p-2">
            <TbMoneybag className="text-white " size={30} />
          </span>
          <input
            type="text"
            className="w-full rounded-lg p-2 m-2 bg-gray-800 outline-none text-white"
            placeholder="Add Todo"
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            value={todo.title}
          />
          <button
            className="bg-gray-700 rounded-[50%] p-2 m-2"
            onClick={() => handleTodo()}
          >
            <GoPlus className="text-white" size={30} />
          </button>
        </div>

        <input
          type="text"
          className="w-[90%] rounded-lg p-2 m-2 bg-gray-800 outline-none text-white"
          placeholder="Add Todo Description"
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          value={todo.description}
        />
      </div>
    </div>
  );
};

export default TodoInput;
