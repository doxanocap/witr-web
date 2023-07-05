import { Props } from '@/utils/interfaces/button'
import React from 'react'

const DefaultButton: React.FC<Props> = ({ text, style, isHidden, onClick }) => {
  let className = `flex button justify-center items-center 
    font-black rounded-md shadow-md
    sm:text-h16 md:text-h18 lg:text-h20 
    md:px-xmd md:py-ymd lg:px-xlg lg:py-ylg 
    `

  className +=
    style === 'dark'
      ? ' bg-cblue hover:bg-white border-2 border-white text-white hover:border-cblue hover:text-cblue rounded-md shadow-md'
      : ' bg-white hover:bg-cblue border-2 border-cblue text-cblue rounded-md shadow-md hover:text-white'

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  )
}

export default DefaultButton
