import { CardProps, TeamCardProps } from '@/components/Cards'
import ContactUs1 from '@/icons/contactUs1.svg'
import ContactUs2 from '@/icons/contactUs2.svg'
import ContactUs3 from '@/icons/contactUs3.svg'
import ContactUs4 from '@/icons/contactUs4.svg'
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

export const StriveGridData: CardProps[] = [
  {
    title: 'Web Applications',
    text:
      'Power your business with our customized web applications, delivering seamless digital experiences tailored to your needs.',
    Svg: striveCard1,
    onClick: () => {
      window.location.reload()
    },
  },
  {
    title: 'Mobile Apps',
    text:
      "Transform your ideas into captivating mobile apps that engage users and elevate your brand's presence in the digital world.",
    Svg: striveCard2,
    onClick: () => {
      window.location.reload()
    },
  },
  {
    title: 'UX/UI Design',
    text:
      'Create intuitive and visually captivating interfaces that enhance user experiences and drive engagement.',
    Svg: striveCard3,
    onClick: () => {
      window.location.reload()
    },
  },
  {
    title: 'Graphic Design',
    text:
      'Bring your brand to life with stunning visuals that make a lasting impact, from eye-catching logos to captivating marketing materials.',
    Svg: striveCard4,
    onClick: () => {
      window.location.reload()
    },
  },
  {
    title: 'Computer Vision',
    text:
      'Leverage cutting-edge computer vision technology to analyze visual data, automate tasks, and gain valuable insights for your business.',
    Svg: striveCard5,
    onClick: () => {
      window.location.reload()
    },
  },
  {
    title: 'AI integration',
    text: 'Incorporating AI technologies and capabilities into existing systems or workflows, leveraging algorithms, machine learning models to enhance the functionality and efficiency of various processes',
    Svg: striveCard6,
    onClick: () => {
      window.location.reload()
    },
  },
]

export const WhyGridData: CardProps[] = [
  {
    title: 'Expertise and experience',
    text:
      'Our team consists of fully-certified and highly experienced members ',
    Svg: WhyCard1,
    onClick: () => {
      window.location.reload()
    },
  },
  {
    title: 'Customized solutions',
    text: 'Your specific needs - our individual customized solutions',
    Svg: WhyCard2,
    onClick: () => {
      window.location.reload()
    },
  },
  {
    title: 'Innovative technologies',
    text: 'Our team works with latest tools and technologies',
    Svg: WhyCard3,
    onClick: () => {
      window.location.reload()
    },
  },
  {
    title: 'Timely delivery',
    text: 'We commit to deliver our project always on time',
    Svg: WhyCard4,
    onClick: () => {
      window.location.reload()
    },
  },
]

export const TeamGridData: TeamCardProps[] = [
  {
    title: 'Eldos Kadirbekov',
    text: 'CTO & co-founder',
    img: TeamEldosKadirbekov,
    onClick: () => {
      window.location.reload()
    },
  },
  {
    title: 'Alibi Serikbay',
    text: 'CEO & co-founder',
    img: TeamAlibiSerikbay,
    onClick: () => {
      window.location.reload()
    },
  },
  {
    title: 'Eldos Kadirbekov',
    text: 'CTO & co-founder',
    img: TeamEldosKadirbekov,
    onClick: () => {
      window.location.reload()
    },
  },
  {
    title: 'Alibi Serikbay',
    text: 'CEO & co-founder',
    img: TeamAlibiSerikbay,
    onClick: () => {
      window.location.reload()
    },
  },
]

export const ContactUsData: CardProps[] = [
  {
    title: '+77076331002',
    text: '',
    Svg: ContactUs1,

    onClick: () => {
      window.location.reload()
    },
  },
  {
    title: 'witr.kz@gmail.com',
    text: '',
    Svg: ContactUs2,
    onClick: () => {
      window.location.reload()
    },
  },
  {
    title: 'Witr.kz',
    text: '',
    Svg: ContactUs3,
    onClick: () => {
      window.location.reload()
    },
  },
  {
    title: 'witr.kz',
    text: '',
    Svg: ContactUs4,
    onClick: () => {
      window.location.reload()
    },
  },
]
