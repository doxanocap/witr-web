// import chevronDownIcon from '@/icons/chevron-down-blue.svg'
import ChevronDownBlue from '@/icons/chevron-down-blue.svg'
import { Props } from '@/utils/interfaces/button'
import React from 'react'

const SelectButton: React.FC<Props> = ({
  text,
  style,
  onClick,
}) => {
  let className =
    `button flex justify-center items-center 
    flex-row pt-1 
    sm:text-h5 md:text-h4 lg:text-h3 
    md:px-xmd md:py-ymd lg:px-xlg lg:py-ylg 
    border-2 rounded-md shadow-md`

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
