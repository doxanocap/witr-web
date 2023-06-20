import { Props } from '@/utils/interfaces/button'
import React from 'react'

const DefaultButton: React.FC<Props> = ({ text, style, onClick }) => {
  return (
    <button
      className={
        'button flex justify-center items-center h-[44px] w-[193px] mx-[15px] text-h3 font-black bg-cblue bg-gradient-spread text-white px-6 py-3 rounded-md shadow-md'
      }
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default DefaultButton
