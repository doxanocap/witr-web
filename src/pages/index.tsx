import ProjectBox from "@/components/Boxes/ProjectBox";
import DefaultButton from "@/components/Buttons/Default";
import ContactUsCard from "@/components/Cards/ContactUsCard";
import StriveCard from "@/components/Cards/StriveCard";
import WhyCard from "@/components/Cards/WhyCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ImageCarousel from "@/components/ImageCarousel";
import SpecialText from "@/components/SpecialText";
import VideoPlayer from "@/components/Video";
import { consts } from "@/const/consts";
import {
  ContactUsData,
  OurPorjectsGridData,
  PartnersGridData,
  StriveGridData,
  WhyGridData,
} from "@/const/grid";
import { ResolutionTypes, whichResolution } from "@/const/resolutioon";
import Graphics from "@/icons/graphics.svg";
import RequestFrom from "@/icons/requestForm1.svg";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const myRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [resolution, setResolution] = useState<ResolutionTypes>("md");
  const [prev, setPrev] = useState<string>("");

  const executeScroll = () => {
    if (myRef !== null && myRef.current !== null) {
      myRef.current.scrollIntoView();
    }
  };

  useEffect(() => {
    setWidth(window.screen.width);
    setHeight(window.screen.height);
    setResolution(whichResolution(width));
  }, [width, resolution]);

  return (
    <div className="min-w-[768px]">
      <Header />
      <div className="flex flex-col items-center min-h-screen bg-cwhite">
        <div className="flex relative text-center  items-center justify-end h-[800px] md:w-md lg:w-lg">
          <nav className="absolute space-y-[30px] md:w-[200px] lg:w-[620px] left-0">
            <li className="flex list-none md:text-h26 lg:text-h40 font-black">
              <SpecialText
                prev={""}
                main="NU Motorsports "
                next="- creation of engineering ecosystem in Kazakhstan. "
                newLine={true}
              />
            </li>

            <li className="list-none flex text-left flex-col leading-6 font-sans md:text-h4 lg:text-h20 text-black font-semibold">
              Formula Student Team from Kazakhstan🏎️
              <span>Building the Future of Engineering in KZ🛠️</span>
              <span>Link to become our Pilot 🧑‍✈️🏎️⬇️</span>
            </li>
            <li className="list-none mt-30">
              <DefaultButton
                text={"GET STARTED"}
                marginX={"0px"}
                marginY={"50px"}
                style={"dark"}
                onClick={() => {
                  setPrev("haha");
                }}
              />
            </li>
          </nav>
          <div className="absolute left-0 bottom-[20px] md:text-h26 lg:text-h40">
            <SpecialText prev="What we" main="strive in" next="" />
          </div>
          <div className="">
            <Graphics width="500" height="500" viewBox={"0 0 700 700"} />
          </div>
        </div>

        <div
          className={`
            grid justify-center 
            md:w-md md:grid-rows-3 md:grid-cols-2 md:gap-x-[20px] md:gap-y-[37px]
            lg:w-lg lg:grid-rows-2 lg:grid-cols-3 lg:gap-x-[30px] lg:gap-y-[37px]
          `}
        >
          {StriveGridData.map((item, key) => (
            <StriveCard
              key={key}
              title={item.title}
              text={item.text}
              Svg={item.Svg}
              onClickBtn={executeScroll}
            />
          ))}
        </div>

        <div className="flex  flex-col items-start md:w-md lg:w-lg mt-[100px]">
          <div className="mb-[10px] md:text-h26 lg:text-h40 font-bold text-cblue">
            About Us
          </div>

          <div
            className={`
              grid justify-start  
              
              md:w-md md:grid-rows-2 md:grid-cols-1 md:gap-x-[0px] md:gap-y-[30px]
              lg:w-lg lg:grid-rows-1 lg:grid-cols-2 lg:gap-x-[50px] lg:gap-y-[10px]
              `}
          >
            <VideoPlayer />
            <div className="flex text-black md:text-[18px] lg:text-[22px] text-left ">
              {consts.Texts.AboutUS}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start md:w-md lg:w-lg mt-[50px]">
          <div className="mb-[34px] md:text-h26 lg:text-h40 font-bold text-black">
            Out projects
          </div>
          {OurPorjectsGridData.map((item, key) => (
            <ProjectBox
              key={key}
              float={item.float}
              title={item.title}
              description={item.description}
              list_title={item.list_title}
              list_items={item.list_items}
              Svg={item.Svg}
              onClick={executeScroll}
            />
          ))}
        </div>

        <div className="flex flex-col md:w-md lg:w-lg mb-[100px]">
          <div className="flex mb-[34px] md:text-h26 lg:text-h40">
            <SpecialText prev="Why choose" main="NU Motorsports?" next="" />
          </div>
          <div
            className={`
              grid justify-start  
              md:w-md md:grid-rows-2 md:grid-cols-2 md:gap-x-[20px] md:gap-y-[37px]
              lg:w-lg lg:grid-rows-1 lg:grid-cols-4 lg:gap-x-[30px] lg:gap-y-[37px]
            `}
          >
            {WhyGridData.map((item, key) => (
              <WhyCard
                key={key}
                title={item.title}
                text={item.text}
                Svg={item.Svg}
                onClickDiv={executeScroll}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col md:w-md lg:w-lg mb-[100px]">
          <div className="flex mb-[34px] md:text-h26 lg:text-h40">
            <SpecialText prev="Meet our" main="team" next="" />
          </div>
          <ImageCarousel />
        </div>

        <div className="flex flex-col d lg:w-lg mb-[100px]">
          <div className="flex mb-[34px] md:text-h26 lg:text-h40">
            <SpecialText prev="Our" main="partners" next="" />
          </div>
          <div
            className={`
              grid justify-start  
              md:w-md md:grid-rows-2 md:grid-cols-3 md:gap-x-[20px] md:gap-y-[37px]
              lg:w-lg lg:grid-rows-2 lg:grid-cols-3 lg:gap-x-[30px] lg:gap-y-[37px]
            `}
          >
            {PartnersGridData.map((item, key) => (
              <div className="flex justify-center items-center" key={key}>
                <item.Svg />
              </div>
            ))}
          </div>
        </div>

        <div
          ref={myRef}
          className="flex w-full justify-start items-center md:w-md lg:w-lg mb-[100px]"
        >
          <div className="flex w-[50%] flex-col md:text-h26 lg:text-h40">
            <SpecialText
              prev="Do you have any upcoming"
              main="projects?"
              next=""
            />
            <div className="text-black mt-[30px] mb-[100px] text-h26">
              We are here to help you with your ideas.
            </div>
            <div className="flex md:w-[220px] lg:w-[450px] flex-col">
              <DefaultButton
                text="Send a request"
                style="dark"
                onClick={() => {
                  router.push(consts.Links.LeaveRequest);
                }}
              />
            </div>
          </div>
          <div>
            <RequestFrom height="400" width="500" viewBox={"0 0 750 450"} />
          </div>
        </div>

        <div className="flex flex-col md:w-md lg:w-lg md:text-h20 lg:text-h36 mb-[100px]">
          <div className="flex mb-[34px] md:text-h26 lg:text-h40">
            <SpecialText prev="" main="Contact" next="us" newLine={false} />
          </div>
          {resolution === "md" ? (
            <div
              className={`
              grid  
              md:w-md md:grid-rows-2 md:grid-cols-2 md:gap-x-[20px] md:gap-y-[37px]              
            `}
            >
              {ContactUsData.map((item, key) => (
                <ContactUsCard
                  key={key}
                  title={item.title}
                  text={item.text}
                  Svg={item.Svg}
                  onClickBtn={executeScroll}
                />
              ))}
            </div>
          ) : (
            <div className="flex justify-between mb-[20px]">
              {ContactUsData.map((item, key) => (
                <ContactUsCard
                  key={key}
                  title={item.title}
                  text={item.text}
                  Svg={item.Svg}
                  onClickBtn={executeScroll}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
