import { BoxProps } from "@/components/Boxes";
import { ImgCardProps, SvgCardProps } from "@/components/Cards";
import ContactUs1 from "@/icons/contactUs1.svg";
import ContactUs2 from "@/icons/contactUs2.svg";
import ContactUs3 from "@/icons/contactUs3.svg";
import ContactUs4 from "@/icons/contactUs4.svg";
import OurProjects1 from "@/icons/ourProjects1.svg";
import OurProjects2 from "@/icons/ourProjects2.svg";
import striveCard1 from "@/icons/striveCard1.svg";
import striveCard2 from "@/icons/striveCard2.svg";
import striveCard3 from "@/icons/striveCard3.svg";
import striveCard4 from "@/icons/striveCard4.svg";
import striveCard5 from "@/icons/striveCard5.svg";
import striveCard6 from "@/icons/striveCard6.svg";
import WhyCard1 from "@/icons/whyCard1.svg";
import WhyCard2 from "@/icons/whyCard2.svg";
import WhyCard3 from "@/icons/whyCard3.svg";
import WhyCard4 from "@/icons/whyCard4.svg";

import TeamAzamatMalgazhdar from "@/images/AzamatMalgazhdar.png";
import TeamDinmukhamedAbdimazhit from "@/images/DinmukhamedAbdimazhit.png";
import TeamMalikaAmangeldyyeva from "@/images/MalikaAmangeldyyeva.png";
import TeamKirSmolyarchuk from "@/images/KirSmolyarchuk.png";
import TeamTemirlanSarbupin from "@/images/TemirlanSarbupin.png";
import TeamKuanyshBakytuly from "@/images/kuanysh_bakytuly.png";

import Partner1 from "@/icons/partner1.svg";
import Partner2 from "@/icons/partner2.svg";
import Partner3 from "@/icons/partner3.svg";
import Partner4 from "@/icons/partner4.svg";
import Partner5 from "@/icons/partner5.svg";

export const StriveGridData: SvgCardProps[] = [
  {
    title: "Web Applications",
    text: "Power your business with our customized web applications, delivering seamless digital experiences tailored to your needs.",
    Svg: striveCard1,
    onClickBtn: () => {
      window.location.reload();
    },
  },
  {
    title: "Mobile Apps",
    text: "Transform your ideas into captivating mobile apps that engage users and elevate your brand's presence in the digital world.",
    Svg: striveCard2,
    onClickBtn: () => {
      window.location.reload();
    },
  },
  {
    title: "UX/UI Design",
    text: "Create intuitive and visually captivating interfaces that enhance user experiences and drive engagement.",
    Svg: striveCard3,
    onClickBtn: () => {
      window.location.reload();
    },
  },
  {
    title: "Graphic Design",
    text: "Bring your brand to life with stunning visuals that make a lasting impact, from eye-catching logos to captivating marketing materials.",
    Svg: striveCard4,
    onClickBtn: () => {
      window.location.reload();
    },
  },
  {
    title: "Computer Vision",
    text: "Leverage cutting-edge computer vision technology to analyze visual data, automate tasks, and gain valuable insights for your business.",
    Svg: striveCard5,
    onClickBtn: () => {
      window.location.reload();
    },
  },
  {
    title: "AI integration",
    text: "Incorporating AI technologies and capabilities into existing systems or workflows, leveraging algorithms, machine learning models to enhance the functionality and efficiency of various processes",
    Svg: striveCard6,
    onClickBtn: () => {
      window.location.reload();
    },
  },
];

export const WhyGridData: SvgCardProps[] = [
  {
    title: "Expertise and experience",
    text: "Our team consists of fully-certified and highly experienced members ",
    Svg: WhyCard1,
    onClickDiv: () => {
      window.location.reload();
    },
  },
  {
    title: "Clear Mission",
    text: "We are student club that aims to build the first Formula car in Kazakhstan.",
    Svg: WhyCard2,
    onClickDiv: () => {
      window.location.reload();
    },
  },
  {
    title: "Innovative technologies",
    text: "Our team works with latest tools and technologies",
    Svg: WhyCard3,
    onClickDiv: () => {
      window.location.reload();
    },
  },
  {
    title: "Timely delivery",
    text: "We commit to manage time wisely.",
    Svg: WhyCard4,
    onClickDiv: () => {
      window.location.reload();
    },
  },
];

export const OurPorjectsGridData: BoxProps[] = [
  {
    float: "right",
    title: "FSAE car",
    description:
      "Formula SAE (FSAE) involves university students designing and building small, high-performance race cars for competition. These single-seat vehicles are part of events covering design evaluation, business presentation, cost analysis, and dynamic performance tests. Building an FSAE car provides students with practical engineering experience, teamwork skills, and creative problem-solving. The competition's rulebook ensures safety and fair competition while encouraging innovative designs.",
    list_title: "Benefits:",
    list_items: [
      "Practical engineering experience",
      "Teamwork skills development",
      "Encourages creative problem-solving",
    ],
    Svg: OurProjects1,
    onClick: () => {
      window.location.reload();
    },
  },
  {
    float: "right",
    title: "Computer Vision",
    description:
      "Our Plate Recognition solution for the Metallurgical Company in Temirtau combines advanced technology with a 98% accuracy rate. By seamlessly integrating with the smart parking system, it automates the identification and recording of license plates",
    list_title: "Results:",
    list_items: [
      "Streamlined Parking Procceses",
      "Efficiency Improved",
      "Enhanced Experience",
    ],

    Svg: OurProjects2,
    onClick: () => {
      window.location.reload();
    },
  },
];

export const TeamGridData: ImgCardProps[] = [
  {
    title: "Temirlan Sarbupin",
    text: "President",
    img: TeamTemirlanSarbupin,
    onClickDiv: () => {},
  },
  {
    title: "Azamat Malgazhdar",
    text: "Head of Chassis",
    img: TeamAzamatMalgazhdar,
    onClickDiv: () => {},
  },
  {
    title: "Malika Amangeldyyeva",
    text: "Event Manager",
    img: TeamMalikaAmangeldyyeva,
    onClickDiv: () => {},
  },
  {
    title: " Dinmukhamed Abdimazhit",
    text: "Marketing Head",
    img: TeamDinmukhamedAbdimazhit,
    onClickDiv: () => {},
  },
  {
    title: "Kir Smolyarchuk",
    text: "Engineer",
    img: TeamKirSmolyarchuk,
    onClickDiv: () => {},
  },
  {
    title: "Kuanysh Bakytuly",
    text: "ML Engineer",
    img: TeamKuanyshBakytuly,
    onClickDiv: () => {},
  },
];

export const PartnersGridData: SvgCardProps[] = [
  {
    title: "NU",
    text: "",
    Svg: Partner1,
    onClickDiv: () => {
      window.location.reload();
    },
  },
  {
    title: "BI Group",
    text: "",
    Svg: Partner2,
    onClickDiv: () => {
      window.location.reload();
    },
  },
  {
    title: "MED 365",
    text: "",
    Svg: Partner3,
    onClickDiv: () => {
      window.location.reload();
    },
  },
  {
    title: "Connected Home",
    text: "",
    Svg: Partner4,
    onClickDiv: () => {
      window.location.reload();
    },
  },
  {
    title: "AK CENT Microsystems",
    text: "",
    Svg: Partner5,
    onClickDiv: () => {
      window.location.reload();
    },
  },
];

export const ContactUsData: SvgCardProps[] = [
  {
    title: "+77076331002",
    text: "",
    Svg: ContactUs1,

    onClickDiv: () => {},
  },
  {
    title: "motorsports@nu.edu.kz",
    text: "",
    Svg: ContactUs2,
    onClickDiv: () => {},
  },

  {
    title: "nu.motorsports",
    text: "",
    Svg: ContactUs4,
    onClickDiv: () => {},
  },
];
