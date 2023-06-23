// import chevronDownIcon from '@/icons/chevron-down-blue.svg'
import ChevronDownBlue from '@/icons/chevron-down-blue.svg'
import { Props } from '@/utils/interfaces/button'
import React from 'react'

const SelectButton: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button
      className="button flex justify-center items-center flex-row w-[128px] sm:w-[100px] h-[44px] sm:h-[33px] mx-[15px] pt-1 px-4 text-h3 bg-white border-2 border-cblue text-cblue rounded-md shadow-md"
      onClick={onClick}
    >
        <p className="mr-[10px] font-black ">{text}</p>

      <ChevronDownBlue height='14px'/>
    </button>
  )
}

export default SelectButton
