import React from "react";
import { CiWallet } from "react-icons/ci";

const Header = () => {
  return (
    <div className="text-white border-b-2 border-gray-700  py-4 p-2 flex justify-between items-center">
      <h2 className="text-3xl border-b-2 border-blue-500">Section</h2>
      <div className="flex">
        <div className="flex bg-gray-700 rounded-lg gap-4 items-center mr-2 pl-2">
          <CiWallet className="text-blue-500" size={30} />
          <h2 className="text-white m-2 ">$0.2 $XYZ</h2>
        </div>
        <div className="flex bg-blue-300 rounded-lg px-2 justify-center items-center w-20">
          <h2 className="text-white ">Tier 1</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
