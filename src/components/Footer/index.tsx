import WitrLogo from "@/icons/logoFooter.svg";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center flex-col w-full h-[182px] bg-cdark-blue ">
      <div className="flex justify-between sm:w-sm lg:w-lg md:w-md h-full ">
        <nav className="flex flex-col space-y-[10px] py-[20px] h-full">
          <li className="list-none">
            <WitrLogo />
          </li>
          <li className="list-none text-left sm:text-h20 lg:text-h26 pl-[10px]">
            Your trusted IT partner
          </li>
        </nav>

        <nav className="flex flex-col text-right text-h16 space-y-[5px] py-[20px] h-full">
          <li className="list-none cursor-pointer">Privacy Policy</li>
          <li className="list-none cursor-pointer">Terms of Service</li>
          <li className="list-none cursor-pointer">Sales and Refunds</li>
          <li className="list-none cursor-pointer">Site Map</li>
        </nav>
      </div>

      <div className="flex justify-center font-medium text-h4 pb-[17px]">
        <p>© {new Date().getFullYear()} Lumos. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
