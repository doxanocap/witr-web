import React from 'react'

interface Props {
  prev: string
  main: string
  next: string
  newLine?: boolean
}

const SpecialText: React.FC<Props> = ({ prev, main, next, newLine }) => {
  let classname = prev ? "sm:mx-[5px] md:mx-[7.5px] lg:mx-[10px]" : "sm:mr-[5px] md:mr-[7.5px] lg:mr-[10px]"

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
        <span>
          <span className={'text-cblue ' + classname}>
            {main}
          </span>
          <span>{next}</span>
        </span>
      )}
    </div>
  )
}

export default SpecialText
