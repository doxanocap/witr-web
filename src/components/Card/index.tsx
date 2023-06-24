import React from 'react'

export interface CardProps {
  title: string
  text: string
  Svg: React.FC
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const DefaultCard: React.FC<CardProps> = ({ title, text, Svg, onClick }) => {
  return (
    <div className="flex w-[450px] h-[500px] rounded-md px-[49px] py-[30px] bg-white">
      <div className="flex flex-col w-full">
        <Svg />
        <div className="text-left my-[37px] font-bold text-h3 text-black">
            {title}
        </div>
        <div className="text-left text-black text-h4 font-sans">
          {text}
        </div>
      </div>
    </div>
  )
}

export default DefaultCard
