import { Props } from '@/utils/interfaces/button'
import React from 'react'

const DefaultButton: React.FC<Props> = ({
  text,
  style,
  marginX,
  marginY,
  onClick,
}) => {
  let className =
    'button flex justify-center items-center md:h-[44px] sm:h-[34px] py-[15px] px-[30px] text-h3 font-black rounded-md shadow-md'

  className += marginX ? ` mx-[${marginX}]` : ` mx-[15px]`
  className += marginY ? ` my-[${marginY}]` : ' my-[5px]'
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
