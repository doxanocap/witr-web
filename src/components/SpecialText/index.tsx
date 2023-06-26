import React from 'react'

interface Props {
  prev: string
  main: string
  next: string
  newLine?: boolean
}

const SpecialText: React.FC<Props> = ({ prev, main, next, newLine }) => {
  return (
    <div className="text-left text-black font-semibold">
      <span>{prev}</span>
      {newLine ? (
        <div>
          <span className="text-cblue">
            {main}
          </span>
          <span>{next}</span>
        </div>
      ) : (
        <>
          <span className="text-cblue sm:mx-[5px] md:mx-[7.5px] lg:mx-[10px]">
            {main}
          </span>
          <span>{next}</span>
        </>
      )}
    </div>
  )
}

export default SpecialText
