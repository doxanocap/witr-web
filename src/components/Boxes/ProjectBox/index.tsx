import EllipseDot from "@/icons/ellipseDot.svg";
import React from "react";

import DefaultButton from "@/components/Buttons/Default";
import { BoxProps } from "..";

const ProjectBox: React.FC<BoxProps> = ({
  float,
  title,
  description,
  list_title,
  list_items,
  Svg,
  onClick,
}) => {
  return (
    <div
      className={`
        sm:mb-[150px] md:mb-[100px] lg:mb-[100px]
        grid
        sm:w-sm
        sm:h-[850px]
        md:w-md lg:w-lg
        sm:grid-cols-1 sm:grid-rows-2 sm:gap-y-[0px]  sm:gap-x-[0px]
        md:grid-cols-1 md:grid-rows-2 md:gap-y-[20px]
        lg:grid-cols-3 lg:grid-rows-1 lg:gap-x-[20px] 
        w-full
      `}
    >
      <nav className="flex flex-col lg:space-y-[15px] text-black">
        <li className="list-none flex sm:text-h24 md:text-h24 lg:text-h30 text-cblue font-bold">
          {title}
        </li>
        <li className="list-none flex sm:text-h16 md:text-h20 lg:text-h20">
          {description}
        </li>
        <li className="list-none flex flex-col sm:text-h24 lg:text-h26 font-medium">
          {list_title}
          <nav className="mt-[0px]">
            {list_items?.map((item, key) => {
              return (
                <li key={key} className="flex items-center">
                  <EllipseDot />
                  <p className="ml-[10px] sm:text-h16 md:text-20 lg:text-h20 font-normal">
                    {item}
                  </p>
                </li>
              );
            })}
          </nav>
        </li>

        <li className="list-none flex flex-col w-[200px] text-h36 text-black font-bold">
          <DefaultButton onClick={onClick} text="Get" style="dark" />
        </li>
      </nav>
      <div className="flex col-span-2 justify-center items-center">
        <Svg />
      </div>
    </div>
  );
};

export default ProjectBox;
