// import chevronDownIcon from '@/icons/chevron-down-blue.svg'
import ChevronDownBlue from '@/icons/chevron-down-blue.svg'
import { Props } from '@/utils/interfaces/button'
import React from 'react'

const SelectButton: React.FC<Props> = ({
  text,
  style,
  marginX,
  marginY,
  onClick,
}) => {
  let className =
    'button flex justify-center items-center flex-row h-[44px] sm:h-[34px] px-[30px] mx-[15px] pt-1 text-h3 border-2 rounded-md shadow-md'

  className += marginX ? ` mx-[${marginX}]` : ' mx-[15px]'
  className += marginY ? ` my-[${marginY}]` : ' my-[5px]'
  className +=
    style === 'dark'
      ? ' bg-cblue text-white border-white'
      : ' bg-white text-cblue border-cblue'

  return (
    <button className={className} onClick={onClick}>
      <p className="mr-[10px] font-black ">{text}</p>

      <ChevronDownBlue height="14px" />
    </button>
  )
}

export default SelectButton
