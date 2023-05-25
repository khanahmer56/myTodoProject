import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { CgLoadbarSound } from "react-icons/cg";
import { MdSpaceDashboard } from "react-icons/md";
import { BsFillShareFill } from "react-icons/bs";
const SectionList = [
  {
    icon: <RxDashboard className="text-white" />,
    section: "Home",
  },
  {
    icon: <RxDashboard className="text-white" />,
    section: "Section 1",
  },
  {
    icon: <CgLoadbarSound className="text-white" />,
    section: "Section 2",
  },
  {
    icon: <MdSpaceDashboard className="text-white" />,
    section: "Section 3",
  },
  {
    icon: <BsFillShareFill className="text-white" />,
    section: "Section 4",
  },
];

const Section = ({ section, active, setActive }) => {
  return (
    <div
      className={`w-full flex items-center gap-4 my-4 ml-1 pl-2 cursor-pointer p-2 rounded-lg ${
        active === section.section && "bg-gray-700"
      }`}
      onClick={() => setActive(section.section)}
    >
      <div>{section.icon}</div>
      <h5 className="text-white text-center">{section.section}</h5>
    </div>
  );
};

const SideBar = () => {
  const [active, setActive] = useState("Home");
  return (
    <div className="w-[250px] p-4 border-r-2 border-gray-700 flex flex-col mb-5">
      <div className="flex ">
        <div className="h-10 w-10 rounded-[50%] bg-blue-600 flex justify-center item-center text-white ">
          <h1 className="text-lg mt-1">A</h1>
        </div>
        <h2 className="text-white m-2 font-bold">Ahmer Khan</h2>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="mt-10">
          {SectionList.map((section, index) => (
            <Section
              section={section}
              key={index}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>
        <div>
          <div className="flex">
            <div>
              <div className="flex bg-gray-700 rounded-lg gap-4 items-center mr-2 pl-2">
                <div className="h-8 w-8 rounded-[50%] bg-blue-600 flex justify-center item-center text-white ">
                  <h1 className="text-lg ">A</h1>
                </div>
                <h2 className="text-white m-2 font-bold">$0.90</h2>
              </div>
            </div>
            <div className="flex bg-blue-300 rounded-lg px-2 items-center w-20">
              <h2 className="text-white ">Buy $xyz</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
