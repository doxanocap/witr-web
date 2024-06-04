import React, { useState } from "react";
import { SvgCardProps } from "..";
import DefaultButton from "../../Buttons/Default";

const StriveCard: React.FC<SvgCardProps> = ({
  title,
  text,
  Svg,
  onClickBtn,
}) => {
  const [hidden, setHidden] = useState<boolean>(true);

  return (
    <div
      className={`relative flex 
        lg:h-[500px]
        md:h-[500px] 
        sm:h-[500px]  
        bg-white rounded-md 
        shadow-card
        px-[49px] py-[30px]
    `}
      onMouseEnter={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}
    >
      <div className="flex flex-col items-center w-full">
        <div className="flex h-[259px]">
          <Svg />
        </div>
        <div className="text-left w-full font-bold text-h20 text-black">
          {title}
        </div>
        <div className="text-left w-full mt-[27px] text-black text-h16 font-sans">
          {text}
        </div>
        <div
          className={hidden ? "hidden" : "absolute bottom-[30px] right-[30px]"}
        >
          <DefaultButton
            text={"Get"}
            style={"dark"}
            marginX={"0px"}
            marginY={"0px"}
            onClick={onClickBtn}
          />
        </div>
      </div>
    </div>
  );
};

export default StriveCard;
