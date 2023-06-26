import DefaultButton from '@/components/Buttons/Default'
import DefaultCard from '@/components/Card'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SpecialText from '@/components/SpecialText'
import { GridData } from '@/const/grid'
import Graphics from '@/icons/graphics.svg'
import { useEffect, useState } from 'react'

const Home = () => {
  const [width, setWidth] = useState<number>()
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    setWidth(window.screen.width)
    setHeight(window.screen.height)
  }, [])

  return (
    <div className="">
      <Header />
      <main className="flex flex-col items-center min-h-screen bg-cwhite">
        <div className="flex relative text-center items-center justify-end h-[800px] sm:w-sm md:w-md lg:w-lg">
          <nav className="absolute space-y-[30px] md:w-[200px] lg:w-[620px] left-0">
            <li className="flex list-none sm:text-h3 md:text-h2 lg:text-h1 font-black">
              <SpecialText
                prev="Transform Your Business with us"
                main="Witr.kz "
                next="- Your Trusted IT Partner "
                newLine={true}
              />
            </li>

            <li className="list-none flex text-left leading-5 font-sans sm:text-h5 md:text-h4 lg:text-h3 text-black font-semibold">
              Partner with Witr today and experience the power of exceptional IT
              solutions that drive growth, innovation, and success for your
              business.
            </li>
            <li className="list-none mt-30">
              <DefaultButton
                text={'GET STARTED'}
                marginX={'0px'}
                marginY={'50px'}
                style={'dark'}
                onClick={() => window.location.reload()}
              />
            </li>
          </nav>
          <div className="absolute left-0 bottom-0 sm:text-h3 md:text-h2 lg:text-h1">
            <SpecialText prev="What we" main="strive in" next="" />
          </div>
          <div className="">
            <Graphics width="500" height="500" viewBox={'0 0 700 700'} />
          </div>
        </div>

        <div
          className={`grid justify-start 
          sm:w-sm sm:grid-rows-3 sm:grid-cols-2 
          md:w-md md:grid-rows-3 md:grid-cols-2
          lg:w-lg lg:grid-rows-2 lg:grid-cols-3   `}
        >
          {GridData.map((item, key) => (
            <DefaultCard
              key={key}
              title={item.title}
              text={item.text}
              Svg={item.Svg}
              onClick={item.onClick}
            />
          ))}
        </div>
        <div className="flex w-full justify-center items-start h-[450px] my-[105px] bg-white">
          <div className="flex flex-row my-[55px] text-black font-semibold md:text-h1 sm:text-h2">
            What we
            <div className="text-cblue sm:mx-[5px] md:mx-[9px]">strive</div> in
          </div>
        </div>
        <div className="flex flex-col items-center w-full h-[1000px] bg-white">
          <div className="flex flex-row ">
            <div className="flex w-[600px] h-[500px] mx-4 bg-gray-600"></div>
            {/* <div className="flex w-[600px] h-[500px] mx-4 bg-gray-600"></div> */}
          </div>
        </div>
        <div className="flex w-full sm:w-sm md:w-md ">
          <div className="flex flex-row my-[55px] text-black font-semibold md:text-h1 sm:text-h2">
            Meet our
            <div className="text-cblue sm:mx-[5px] md:mx-[9px]">team</div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
