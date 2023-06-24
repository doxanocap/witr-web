import { CardProps } from '@/components/Card'
import Body2App from '@/icons/body2app.svg'
import Body2CompV from '@/icons/body2compv.svg'
import Body2GD from '@/icons/body2gd.svg'
import Body2UiUx from '@/icons/body2uiux.svg'
import Body2Unkn from '@/icons/body2unkn.svg'
import Body2Web from '@/icons/body2web.svg'

export const GridData: CardProps[] = [
  {
    title: 'Web Applications',
    text:
      'Power your business with our customized web applications, delivering seamless digital experiences tailored to your needs.',
    Svg: Body2Web,
    onClick: () => {
      window.location.reload()
    },
  },
  {
    title: 'Mobile Apps',
    text:
      "Transform your ideas into captivating mobile apps that engage users and elevate your brand's presence in the digital world.",
    Svg: Body2App,
    onClick: () => {
      window.location.reload()
    },
  },
  {
    title: 'UX/UI Design',
    text:
      'Create intuitive and visually captivating interfaces that enhance user experiences and drive engagement.',
    Svg: Body2UiUx,
    onClick: () => {
      window.location.reload()
    },
  },
  {
    title: 'Graphic Design',
    text:
      'Bring your brand to life with stunning visuals that make a lasting impact, from eye-catching logos to captivating marketing materials.',
    Svg: Body2GD,
    onClick: () => {
      window.location.reload()
    },
  },
  {
    title: 'Computer Vision',
    text:
      'Leverage cutting-edge computer vision technology to analyze visual data, automate tasks, and gain valuable insights for your business.',
    Svg: Body2CompV,
    onClick: () => {
      window.location.reload()
    },
  },
  {
    title: 'Coming soon...',
    text: 'Stay tuned for more exciting news',
    Svg: Body2Unkn,
    onClick: () => {
      window.location.reload()
    },
  },
]
