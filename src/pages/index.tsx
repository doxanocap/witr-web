import ProjectBox from "@/components/Boxes/ProjectBox";
import DefaultButton from "@/components/Buttons/Default";
import ContactUsCard from "@/components/Cards/ContactUsCard";
import StriveCard from "@/components/Cards/StriveCard";
import WhyCard from "@/components/Cards/WhyCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ImageCarousel from "@/components/ImageCarousel";
import SpecialText from "@/components/SpecialText";
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

const Home = () => {
  const contactsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [resolution, setResolution] = useState<ResolutionTypes>("md");
  const [prev, setPrev] = useState<string>("Transform your business with us");

  const scrollToContacts = () => {
    if (contactsRef !== null && contactsRef.current !== null) {
      contactsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    if (projectsRef !== null && projectsRef.current !== null) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setWidth(window.screen.width);
    setHeight(window.screen.height);
    setResolution(whichResolution(width));
  }, [width, resolution]);

  console.log(resolution, width);

  return (
    <div className="min-w-[400px]">
      <Header
        scrollToContacts={scrollToContacts}
        scrollToProjects={scrollToProjects}
        resolution={resolution}
      />
      <main className="flex flex-col items-center min-h-screen bg-cwhite">
        <div className="flex relative text-center items-center justify-end h-[800px] sm:w-sm md:w-md lg:w-lg">
          <nav className="absolute space-y-[30px] sm:w-[200px] md:w-[200px] lg:w-[620px] left-0">
            <li className="flex list-none sm:text-h26 md:text-h26 lg:text-h36 font-black">
              <SpecialText
                prev={prev}
                main="Lumos "
                next="- your trusted IT partner!"
                newLine={true}
              />
            </li>

            <li className="list-none flex text-left leading-5 font-sans sm:text-h12 md:text-h16 lg:text-h18 text-black font-semibold">
              Partner with us today and experience the power of exceptional IT
              solutions that drive growth, innovation, and success for your
              business.
            </li>
            <li className="list-none mt-30">
              <DefaultButton
                text={"GET STARTED"}
                marginX={"0px"}
                marginY={"50px"}
                style={"dark"}
                onClick={() => {
                  scrollToContacts();
                }}
              />
            </li>
          </nav>
          <div className="absolute left-0 bottom-[20px] sm:text-h26 md:text-h26 lg:text-h36">
            <SpecialText prev="What we" main="strive in" next="" />
          </div>
          <div className="">
            <Graphics
              width={resolution !== "sm" ? "500" : "200"}
              height={resolution !== "sm" ? "500" : "200"}
              viewBox={"0 0 700 700"}
            />
          </div>
        </div>

        <div
          className={`
            grid justify-center 
            sm:w-sm sm:grid-rows-6 sm:grid-cols-1 sm:gap-x-[20px] sm:gap-y-[37px]
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
              onClickBtn={scrollToContacts}
            />
          ))}
        </div>

        <div className="flex flex-col items-start sm:w-sm md:w-md lg:w-lg my-[100px]">
          <div className="mb-[34px] sm:text-h26 md:text-h26 lg:text-h36 font-bold text-black">
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
              onClick={scrollToContacts}
            />
          ))}
        </div>

        <div className="flex flex-col sm:w-sm md:w-md lg:w-lg mb-[100px]">
          <div className="flex mb-[34px] sm:text-h26 md:text-h26 lg:text-h36">
            <SpecialText prev="Why choose" main="Lumos?" next="" />
          </div>
          <div
            className={`
              grid justify-start  
              
              sm:w-sm sm:grid-rows-2 sm:grid-cols-2 sm:gap-x-[20px] sm:gap-y-[37px]
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
                onClickDiv={scrollToContacts}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:w-sm md:w-md lg:w-lg mb-[100px]">
          <div className="flex mb-[34px] sm:text-h26 md:text-h26 lg:text-h36">
            <SpecialText prev="Meet our" main="team" next="" />
          </div>
          <ImageCarousel />
        </div>

        <div className="flex flex-col sm:w-sm lg:w-lg mb-[100px]">
          <div className="flex mb-[34px] sm:text-h26 md:text-h26 lg:text-h36">
            <SpecialText prev="Our previous" main="clients" next="" />
          </div>
          <div
            className={`
              grid justify
              sm:w-sm sm:grid-rows-4 sm:grid-cols-1 sm:gap-x-[0px] sm:gap-y-[10px]
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
          ref={contactsRef}
          className="flex w-full justify-start items-center sm:w-sm md:w-md lg:w-lg mb-[100px]"
        >
          <div className="flex w-[50%] flex-col sm:text-h26 md:text-h20 lg:text-h36">
            <SpecialText
              prev="Do you have any upcoming"
              main="projects?"
              next=""
            />
            <div className="text-black mt-[20px] mb-[10px] sm:text-h16 md:text-h24 lg:text-h24">
              We are here to help you with your ideas.
            </div>
            <div className="flex md:w-[220px] lg:w-[400px] flex-col">
              <DefaultButton text="Send a request" style="dark" />
            </div>
          </div>
          <div>
            <RequestFrom
              height={resolution !== "sm" ? "400" : "150"}
              width={resolution !== "sm" ? "500" : "300"}
              viewBox={"0 0 750 450"}
            />
          </div>
        </div>

        <div className="flex flex-col sm:w-sm md:w-md lg:w-lg md:text-h20 lg:text-h36 mb-[100px]">
          <div className="flex mb-[34px] sm:text-h26 md:text-h26 lg:text-h40">
            <SpecialText prev="" main="Contact" next="us" newLine={false} />
          </div>
          {resolution === "md" || resolution === "sm" ? (
            <div
              className={`
              grid  
              sm:w-sm sm:grid-rows-4 sm:grid-cols-1 sm:gap-x-[20px] sm:gap-y-[10px]       
              md:w-md md:grid-rows-2 md:grid-cols-2 md:gap-x-[20px] md:gap-y-[37px]              
            `}
            >
              {ContactUsData.map((item, key) => (
                <ContactUsCard
                  key={key}
                  title={item.title}
                  text={item.text}
                  Svg={item.Svg}
                  onClickBtn={scrollToContacts}
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
                  onClickBtn={scrollToContacts}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
