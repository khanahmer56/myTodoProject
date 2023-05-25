import React from "react";
import { MdModeEdit } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { deleteUser } from "../../../../features/users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { editState } from "../../../../features/users/user2Slice";
const TodoCard = ({ user }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className=" bg-gray-800 rounded-lg m-2 w-full p-2 pb-4 ">
        <div className="flex w-full items-center justify-between">
          <div className="flex  justify-center gap-4">
            <span className="bg-pink-200 rounded-[50%] p-2">
              <TbMoneybag
                className="text-white cursor-pointer"
                size={30}
                onClick={() => dispatch(deleteUser(user.id))}
              />
            </span>
            <h1 className="text-white text-start mt-2 text-2xl">
              {user.title}
            </h1>
          </div>
          <button className="bg-gray-700 rounded-[50%] p-2 m-2">
            <MdModeEdit
              className="text-white"
              size={30}
              onClick={() => dispatch(editState(user))}
            />
          </button>
        </div>
        <div>
          <h1 className="text-gray-400 mt-2 ml-3">{user.description}</h1>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
