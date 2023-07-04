import EllipseDot from '@/icons/ellipseDot.svg'
import React from 'react'

import DefaultButton from '@/components/Buttons/Default'
import { BoxProps } from '..'

const ProjectBox: React.FC<BoxProps> = ({
  float,
  title,
  description,
  list_title,
  list_items,
  Svg,
  onClick,
}) => {
  return (
    <div
      className={`
        mb-[160px]
        grid
        md:md lg:w-lg
        md:grid-cols-1 md:grid-rows-2 md:gap-y-[20px]
        lg:grid-cols-3 lg:grid-rows-1 lg:gap-x-[20px] 
        w-full
      `}
    >
      <nav className="flex flex-col  lg:space-y-[40px] text-black">
        <li className="list-none flex text-h36 text-cblue font-bold">
          {title}
        </li>
        <li className="list-none flex text-h28">{description}</li>
        <li className="list-none flex flex-col text-h28 font-medium">
          {list_title}
          <nav className="mt-[25px]">
            {list_items?.map((item, key) => {
              return (
                <li key={key} className="flex items-center">
                  <EllipseDot />
                  <p className="ml-[20px] text-28 font-normal">{item}</p>
                </li>
              )
            })}
          </nav>
        </li>

        <li className="list-none flex text-h36 text-black font-bold">
          <DefaultButton onClick={onClick} text="Get" style="dark" />
        </li>
      </nav>
      <div className="flex col-span-2 justify-center items-center">
        <Svg />
      </div>
    </div>
  )
}

export default ProjectBox
