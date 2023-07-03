import React from 'react'
import { SvgCardProps } from '..'

const ContactUsCard: React.FC<SvgCardProps> = ({
  title,
  text,
  Svg,
  onClickDiv,
}) => {
  return (
    <div className="flex cursor-pointer" onClick={onClickDiv}>
      <div className="flex items-center">
        <Svg />
        <div className="ml-[12px] text-black">{title}</div>
      </div>
    </div>
  )
}

export default ContactUsCard
