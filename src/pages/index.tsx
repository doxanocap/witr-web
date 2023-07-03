import DefaultButton from '@/components/Buttons/Default'
import ContactUsCard from '@/components/Cards/ContactUsCard'
import StriveCard from '@/components/Cards/StriveCard'
import TeamCard from '@/components/Cards/TeamCard'
import WhyCard from '@/components/Cards/WhyCard'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SpecialText from '@/components/SpecialText'
import {
  ContactUsData,
  StriveGridData,
  TeamGridData,
  WhyGridData,
} from '@/const/grid'
import { ResolutionTypes, whichResolution } from '@/const/resolutioon'
import Graphics from '@/icons/graphics.svg'
import { useEffect, useState } from 'react'

const Home = () => {
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)
  const [resolution, setResolution] = useState<ResolutionTypes>('md')

  useEffect(() => {
    setWidth(window.screen.width)
    setHeight(window.screen.height)
    setResolution(whichResolution(width))
  }, [width, resolution])

  return (
    <div className="min-w-[768px]">
      <Header />
      <main className="flex flex-col items-center min-h-screen bg-cwhite">
        <div className="flex relative text-center  items-center justify-end h-[800px] md:w-md lg:w-lg">
          <nav className="absolute space-y-[30px] md:w-[200px] lg:w-[620px] left-0">
            <li className="flex list-none md:text-h26 lg:text-h40 font-black">
              <SpecialText
                prev="Transform Your Business with us"
                main="Witr.kz "
                next="- Your Trusted IT Partner "
                newLine={true}
              />
            </li>

            <li className="list-none flex text-left leading-5 font-sans md:text-h4 lg:text-h20 text-black font-semibold">
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
          <div className="absolute left-0 bottom-[20px] md:text-h26 lg:text-h40">
            <SpecialText prev="What we" main="strive in" next="" />
          </div>
          <div className="">
            <Graphics width="500" height="500" viewBox={'0 0 700 700'} />
          </div>
        </div>

        <div
          className={`
            grid justify-center 
            md:w-md md:grid-rows-3 md:grid-cols-2 md:gap-x-[20px] md:gap-y-[37px]
            lg:w-lg lg:grid-rows-2 lg:grid-cols-3 lg:gap-x-[30px] lg:gap-y-[37px]
          `}
        >
          {StriveGridData.map((item, key) => (
            <StriveCard
              key={key}
              title={item.title}
              text={item.text}
              Svg={item.Svg}
              onClickBtn={item.onClick}
            />
          ))}
        </div>

        <div className="flex flex-col d lg:w-lg my-[100px]">
          <div className="flex mb-[34px] md:text-h26 lg:text-h40">
            <SpecialText prev="Our" main="projects" next="" />
          </div>
          <div className="flex w-full h-[1000px] bg-gray-500"></div>
        </div>

        <div className="flex flex-col d lg:w-lg my-[100px]">
          <div className="flex mb-[34px] md:text-h26 lg:text-h40">
            <SpecialText prev="Why choose" main="Witr?" next="" />
          </div>
          <div
            className={`
              grid justify-start  
              md:w-md md:grid-rows-2 md:grid-cols-2 md:gap-x-[20px] md:gap-y-[37px]
              lg:w-lg lg:grid-rows-1 lg:grid-cols-4 lg:gap-x-[30px] lg:gap-y-[37px]
            `}
          >
            {WhyGridData.map((item, key) => (
              <WhyCard
                key={key}
                title={item.title}
                text={item.text}
                Svg={item.Svg}
                onClickDiv={item.onClick}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col d lg:w-lg my-[100px]">
          <div className="flex mb-[34px] md:text-h26 lg:text-h40">
            <SpecialText prev="Meet our" main="team" next="" />
          </div>
          <div
            className={`
              grid
              md:w-md md:grid-rows-2 md:grid-cols-2 md:gap-x-[20px] md:gap-y-[37px]
              lg:w-lg lg:grid-rows-1 lg:grid-cols-4  lg:gap-x-[30px] lg:gap-y-[37px]
            `}
          >
            {TeamGridData.map((item, key) => (
              <TeamCard
                key={key}
                title={item.title}
                text={item.text}
                img={item.img}
                onClickDiv={item.onClick}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col md:w-md lg:w-lg md:text-h20 lg:text-h36 my-[100px]">
          <div className="flex mb-[34px] md:text-h26 lg:text-h40">
            <SpecialText prev="" main="Contact" next="us" newLine={false} />
          </div>
          {resolution === 'md' ? (
            <div
              className={`
              grid  
              md:w-md md:grid-rows-2 md:grid-cols-2 md:gap-x-[20px] md:gap-y-[37px]              
            `}
            >
              {ContactUsData.map((item, key) => (
                <ContactUsCard
                  key={key}
                  title={item.title}
                  text={item.text}
                  Svg={item.Svg}
                  onClickBtn={item.onClick}
                />
              ))}
            </div>
          ) : (
            <div className="flex justify-between mb-[120px]">
              {ContactUsData.map((item, key) => (
                <ContactUsCard
                  key={key}
                  title={item.title}
                  text={item.text}
                  Svg={item.Svg}
                  onClickBtn={item.onClick}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
