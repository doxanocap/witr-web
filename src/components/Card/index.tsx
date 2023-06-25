import React from 'react'
import DefaultButton from '../Buttons/Default'

export interface CardProps {
  title: string
  text: string
  Svg: React.FC
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const DefaultCard: React.FC<CardProps> = ({ title, text, Svg, onClick }) => {
  return (
    <div className="relative flex md:w-[450px] sm:w-[500px] sm:h-[500px] md:h-[500px] rounded-md px-[49px] py-[30px]">
      <div className="flex flex-col items-center w-full">
        <div className="flex h-[259px]">
          <Svg />
        </div>
        <div className="text-left w-full font-bold text-h3 text-black">
          {title}
        </div>
        <div className="text-left w-full mt-[27px] text-black text-h4 font-sans">
          {text}
        </div>
        <div className="absolute bottom-[30px] right-[30px]">
          <DefaultButton
            text={'Get'}
            style={'dark'}
            marginX={'0px'}
            marginY={'0px'}
            onClick={() => window.location.reload()}
          />
        </div>
      </div>
    </div>
  )
}

export default DefaultCard
