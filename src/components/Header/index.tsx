import Link from "next/link";

import Logo from "@/icons/logoHeader.svg";
import { hasCookie } from "cookies-next";
import { useEffect, useState } from "react";
import DefaultButton from "../Buttons/Default";
import SelectButton from "../Buttons/Select";
import { ResolutionTypes } from "@/const/resolutioon";

type IProps = {
  scrollToContacts: () => void;
  scrollToProjects: () => void;
  resolution: ResolutionTypes;
};

const Header: React.FC<IProps> = ({
  scrollToContacts,
  scrollToProjects,
  resolution,
}) => {
  const [auth, setAuth] = useState<boolean>(false);

  const HeaderTexts = [
    {
      text: "ABOUT",
      onclick: scrollToContacts,
    },
    {
      text: "PORTFOLIO",
      onclick: scrollToProjects,
    },
    {
      text: "CONTACTS",
      onclick: scrollToContacts,
    },
  ];

  useEffect(() => {
    const isCookieExists = hasCookie("token");
    if (isCookieExists) {
      setAuth(true);
    }
    setAuth(false);
  }, []);

  return (
    <div className="flex justify-center bg-white">
      <header className="flex justify-between items-center h-[100px] sm:w-sm lg:w-lg md:w-md md:px-md">
        <nav className="flex justify-center items-center h-full sm:space-x-[10px] md:space-x-[20px] lg:space-x-[30px]">
          <li className="list-none">
            <div className="flex cursor-pointer items-center justify-center ">
              <Logo />
            </div>
          </li>

          {resolution !== "sm" &&
            HeaderTexts.map((item, key) => (
              <li key={key} className="list-none">
                <div
                  onClick={() => {
                    item?.onclick();
                  }}
                  className="font-black text-cblue md:text-h14 lg:text-h16"
                >
                  {item.text}
                </div>
              </li>
            ))}
        </nav>
        <nav className="flex justify-center items-center h-full sm:px-[10px] md:space-x-[15px] lg:space-x-[30px]">
          <li className="list-none">
            <DefaultButton
              text="Leave a request"
              style="dark"
              marginX="7.5px"
              onClick={() => {
                scrollToContacts();
              }}
            />
          </li>
        </nav>
      </header>
    </div>
  );
};

export default Header;
