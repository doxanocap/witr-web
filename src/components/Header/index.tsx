import Link from "next/link";

import DefaultButton from "../Buttons/Default";
import Image from "next/image";
import { useRouter } from "next/router";
import { consts } from "@/const/consts";
import HeaderLogo from "@/icons/logo.svg";

const HeaderTexts = [
  {
    text: "My NU",
    link: "https://my.nu.edu.kz/wps/myportal/student/!ut/p/b1/lZDdboJAEEafyOyAwC6XLOwKWMEVF5Ub438tKlalJTy9W9PEVKNt526Sc2a-GZShUcPGOhgGJmiIst3kY72anNbFbrL56jNrrMeCOVRzoMUFBhH41GepDUCbChgpAB6UAzd-GhHl2zJOSKRDS_v2Hy3o63_bfwVeNAucdihMjm0dPOO__l3AX_wBym6Q-wQX4NmLfk4A8DkI3kl9KWTzkuFpCvWkyC-2CzRSGL5ixA1NhXWD0CRS3WKiPhqms2PlFs6nx7weg1xwbVnR8pBMDywaHGiUJKGxdDdxXdpjEnvefNGwWF4YWS2sAQ32ZdvyuzpWZ751qvd2Wk17Zm_WIjLIc4k9RufVUJr11N3lM7I6nsryuEfbbMM5t4N197U4A9TkE2Y!/dl4/d5/L2dBISEvZ0FBIS9nQSEh/pw/Z7_2OQEAB1A08CJ50QIPIJ58U20G5/ren/-/#",
  },
  { text: "Instagram", link: "https://www.instagram.com/nu.motorsports/" },
  { text: "Telegram", link: "https://t.me/FSAE_NU" },
];

const Header = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center bg-white">
      <header className="flex justify-between items-center h-[100px] lg:w-lg md:w-md md:px-md">
        <nav className="flex justify-center items-center h-full md:space-x-[20px] lg:space-x-[30px]">
          <li className="list-none">
            <div>
              <HeaderLogo />
            </div>
          </li>

          {HeaderTexts.map((item, key) => (
            <li key={key} className="list-none">
              <Link
                href={item.link}
                className="font-black text-cblue md:text-h14 lg:text-h20"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </nav>
        <nav className="flex justify-center items-center h-full md:space-x-[15px] lg:space-x-[30px]">
          <li className="list-none">
            <DefaultButton
              text="Leave a request"
              style="dark"
              marginX="7.5px"
              onClick={() => {
                router.push(consts.Links.LeaveRequest);
              }}
            />
          </li>
        </nav>
      </header>
    </div>
  );
};

export default Header;
