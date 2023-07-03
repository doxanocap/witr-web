import { Props } from '@/utils/interfaces/button'
import React from 'react'

const DefaultButton: React.FC<Props> = ({
  text,
  style,
  onClick,
}) => {
  let className = `button flex justify-center items-center 
    font-black rounded-md shadow-md
    sm:text-h16 md:text-h18 lg:text-h20 
    md:px-xmd md:py-ymd lg:px-xlg lg:py-ylg 
    `

  className +=
    style === 'dark'
      ? ' bg-cblue bg-gradient-spread text-white'
      : ' bg-white text-cblue border-2 rounded-md shadow-md border-cblue'

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  )
}

export default DefaultButton
