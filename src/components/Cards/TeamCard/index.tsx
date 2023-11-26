import React from "react";
import { ImgCardProps } from "..";

import Image from "next/image";

const TeamCard: React.FC<ImgCardProps> = ({ title, text, img, onClickDiv }) => {
  return (
    <div className="flex list-none w-[330px]" onClick={onClickDiv}>
      <div className="flex flex-col items-center w-full">
        <Image
          className="rounded-md h-[380px] w-[330px] object-cover	"
          src={img}
          loading={"lazy"}
          quality={100}
          height={380}
          width={330}
          alt="member"
        />
        <div className="flex flex-col px-[30px]">
          <div className="text-center w-full font-bold text-h20 mt-[42px] text-black">
            {title}
          </div>

          <div className={`w-full bg-[#8000FF] my-[18px] h-[1px]`}></div>
          <div className="text-center w-full text-black text-h20 font-sans">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
