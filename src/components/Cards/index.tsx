import { StaticImageData } from 'next/image'

export interface SvgCardProps {
  title: string
  text: string
  Svg: React.FC
  onClickBtn?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onClickDiv?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export interface ImgCardProps {
  title: string
  text: string
  img: StaticImageData
  onClickBtn?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onClickDiv?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export interface ImgCarousel {
  executeScroll: () => void
}
