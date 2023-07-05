import { BoxProps } from '@/components/Boxes'
import { ImgCardProps, SvgCardProps } from '@/components/Cards'
import ContactUs1 from '@/icons/contactUs1.svg'
import ContactUs2 from '@/icons/contactUs2.svg'
import ContactUs3 from '@/icons/contactUs3.svg'
import ContactUs4 from '@/icons/contactUs4.svg'
import OurProjects1 from '@/icons/ourProjects1.svg'
import OurProjects2 from '@/icons/ourProjects2.svg'
import OurProjects3 from '@/icons/ourProjects3.svg'
import striveCard1 from '@/icons/striveCard1.svg'
import striveCard2 from '@/icons/striveCard2.svg'
import striveCard3 from '@/icons/striveCard3.svg'
import striveCard4 from '@/icons/striveCard4.svg'
import striveCard5 from '@/icons/striveCard5.svg'
import striveCard6 from '@/icons/striveCard6.svg'
import WhyCard1 from '@/icons/whyCard1.svg'
import WhyCard2 from '@/icons/whyCard2.svg'
import WhyCard3 from '@/icons/whyCard3.svg'
import WhyCard4 from '@/icons/whyCard4.svg'

import TeamAlibiSerikbay from '@/images/alibi_serikbay.png'
import TeamEldosKadirbekov from '@/images/eldos_kadirbekov.jpg'

export const StriveGridData: SvgCardProps[] = [
  {
    title: 'Web Applications',
    text:
      'Power your business with our customized web applications, delivering seamless digital experiences tailored to your needs.',
    Svg: striveCard1,
    onClickBtn: () => {
      window.location.reload()
    },
  },
  {
    title: 'Mobile Apps',
    text:
      "Transform your ideas into captivating mobile apps that engage users and elevate your brand's presence in the digital world.",
    Svg: striveCard2,
    onClickBtn: () => {
      window.location.reload()
    },
  },
  {
    title: 'UX/UI Design',
    text:
      'Create intuitive and visually captivating interfaces that enhance user experiences and drive engagement.',
    Svg: striveCard3,
    onClickBtn: () => {
      window.location.reload()
    },
  },
  {
    title: 'Graphic Design',
    text:
      'Bring your brand to life with stunning visuals that make a lasting impact, from eye-catching logos to captivating marketing materials.',
    Svg: striveCard4,
    onClickBtn: () => {
      window.location.reload()
    },
  },
  {
    title: 'Computer Vision',
    text:
      'Leverage cutting-edge computer vision technology to analyze visual data, automate tasks, and gain valuable insights for your business.',
    Svg: striveCard5,
    onClickBtn: () => {
      window.location.reload()
    },
  },
  {
    title: 'AI integration',
    text:
      'Incorporating AI technologies and capabilities into existing systems or workflows, leveraging algorithms, machine learning models to enhance the functionality and efficiency of various processes',
    Svg: striveCard6,
    onClickBtn: () => {
      window.location.reload()
    },
  },
]

export const WhyGridData: SvgCardProps[] = [
  {
    title: 'Expertise and experience',
    text:
      'Our team consists of fully-certified and highly experienced members ',
    Svg: WhyCard1,
    onClickDiv: () => {
      window.location.reload()
    },
  },
  {
    title: 'Customized solutions',
    text: 'Your specific needs - our individual customized solutions',
    Svg: WhyCard2,
    onClickDiv: () => {
      window.location.reload()
    },
  },
  {
    title: 'Innovative technologies',
    text: 'Our team works with latest tools and technologies',
    Svg: WhyCard3,
    onClickDiv: () => {
      window.location.reload()
    },
  },
  {
    title: 'Timely delivery',
    text: 'We commit to deliver our project always on time',
    Svg: WhyCard4,
    onClickDiv: () => {
      window.location.reload()
    },
  },
]

export const OurPorjectsGridData: BoxProps[] = [
  {
    float: 'right',
    title: 'AI chat Bot',
    description:
      'Our AI chatbots are the ultimate solution for your business. By integrating our cutting-edge technology into your existing systems, you can take your operations to the next level, delight your customers, and achieve exponential growth.',
    list_title: 'Benefits for Your Business:',
    list_items: [
      'Enhanced Customer Experience',
      'Streamlined Operations',
      '24/7 Support',
    ],
    Svg: OurProjects1,
    onClick: () => {
      window.location.reload()
    },
  },
  {
    float: 'right',
    title: 'Computer Vision',
    description:
      'Our Plate Recognition solution for the Metallurgical Company in Temirtau combines advanced technology with a 98% accuracy rate. By seamlessly integrating with the smart parking system, it automates the identification and recording of license plates',
    list_title: 'Results:',
    list_items: [
      'Streamlined Parking Procceses',
      'Efficiency Improved',
      'Enhanced Experience',
    ],

    Svg: OurProjects2,
    onClick: () => {
      window.location.reload()
    },
  },
  {
    float: 'right',
    title: 'Mobile Application',
    description:
      'Our solution for the DinaMarket.kz, mobile shopping app for food and groceries with ease. Find a wide range of high-quality products, from fresh produce to pantry staples, all at your fingertips.',
    list_title: 'Services:',
    list_items: ['Full accompaniment', 'Analytics', 'Client contact'],
    Svg: OurProjects3,
    onClick: () => {
      window.location.reload()
    },
  },
]

export const TeamGridData: ImgCardProps[] = [
  {
    title: 'Eldos Kadirbekov',
    text: 'CTO & co-founder',
    img: TeamEldosKadirbekov,
    onClickDiv: () => {
      window.location.reload()
    },
  },
  {
    title: 'Alibi Serikbay',
    text: 'CEO & co-founder',
    img: TeamAlibiSerikbay,
    onClickDiv: () => {
      window.location.reload()
    },
  },
  {
    title: 'Eldos Kadirbekov',
    text: 'CTO & co-founder',
    img: TeamEldosKadirbekov,
    onClickDiv: () => {
      window.location.reload()
    },
  },
  {
    title: 'Alibi Serikbay',
    text: 'CEO & co-founder',
    img: TeamAlibiSerikbay,
    onClickDiv: () => {
      window.location.reload()
    },
  },
  {
    title: 'Eldos Kadirbekov',
    text: 'CTO & co-founder',
    img: TeamEldosKadirbekov,
    onClickDiv: () => {
      window.location.reload()
    },
  },
  {
    title: 'Alibi Serikbay',
    text: 'CEO & co-founder',
    img: TeamAlibiSerikbay,
    onClickDiv: () => {
      window.location.reload()
    },
  },
  {
    title: 'Eldos Kadirbekov',
    text: 'CTO & co-founder',
    img: TeamEldosKadirbekov,
    onClickDiv: () => {
      window.location.reload()
    },
  },
  {
    title: 'Alibi Serikbay',
    text: 'CEO & co-founder',
    img: TeamAlibiSerikbay,
    onClickDiv: () => {
      window.location.reload()
    },
  },
  {
    title: 'Eldos Kadirbekov',
    text: 'CTO & co-founder',
    img: TeamEldosKadirbekov,
    onClickDiv: () => {
      window.location.reload()
    },
  },
  {
    title: 'Alibi Serikbay',
    text: 'CEO & co-founder',
    img: TeamAlibiSerikbay,
    onClickDiv: () => {
      window.location.reload()
    },
  },
]

export const ContactUsData: SvgCardProps[] = [
  {
    title: '+77076331002',
    text: '',
    Svg: ContactUs1,

    onClickDiv: () => {
      window.location.reload()
    },
  },
  {
    title: 'witr.kz@gmail.com',
    text: '',
    Svg: ContactUs2,
    onClickDiv: () => {
      window.location.reload()
    },
  },
  {
    title: 'Witr.kz',
    text: '',
    Svg: ContactUs3,
    onClickDiv: () => {
      window.location.reload()
    },
  },
  {
    title: 'witr.kz',
    text: '',
    Svg: ContactUs4,
    onClickDiv: () => {
      window.location.reload()
    },
  },
]
