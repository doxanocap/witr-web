import React from "react";
import { SvgCardProps } from "..";

const WhyCard: React.FC<SvgCardProps> = ({ title, text, Svg, onClickDiv }) => {
  return (
    <div
      className={`relative flex 
        lg:h-[370px]
        md:h-[370px] 
        sm:h-[370px]
        bg-white rounded-md cursor-pointer 
        shadow-card
        px-[20px] py-[37px]
    `}
      onClick={onClickDiv}
    >
      <div className="flex flex-col items-center w-full">
        <div className="flex h-[140px] min-h-[140px]">
          <Svg />
        </div>
        <div className={`w-full bg-[#8000FF] mb-[20px] h-[1px]`}></div>
        <div className="text-center w-full font-bold text-h20 text-black">
          {title}
        </div>
        <div className="w-full mt-[19px] text-black lg:text-[18px] text-h4 text-center">
          {text}
        </div>
      </div>
    </div>
  );
};

export default WhyCard;
