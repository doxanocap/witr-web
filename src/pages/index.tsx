import DefaultButton from '@/components/Buttons/Default'
import DefaultCard from '@/components/Card'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { GridData } from '@/const/grid'
import Graphics from '@/icons/graphics.svg'

const Home = () => (
  <div className="min-w-[1080px]">
    <Header />
    <main className="flex flex-col items-center min-h-screen bg-cwhite">
      {/* BODY 1 */}
      <div className="flex h-[800px] sm:w-sm md:w-md text-center items-center justify-end">
        <div className="absolute sm:w-[1050px] md:w-md">
          <div className="flex flex-col justify-center font-black text-left text-black text-h1 sm:text-h2">
            <p className="">Transform Your Business with us</p>
            <div className="flex">
              <p className="text-cblue">Witr.kz </p>
              <p className="ml-2"> - Your Trusted IT Partner </p>
            </div>
          </div>
          <p className="flex flex-col sm:w-[380px] md:w-[600px] mt-[30px] leading-5 font-sans text-left text-h3 sm:text-h4 text-black font-semibold">
            Partner with Witr today and experience the power of exceptional IT
            solutions that drive growth, innovation, and success for your
            business.
          </p>
          <DefaultButton
            text={'GET STARTED'}
            marginX={'0px'}
            marginY={'50px'}
            style={'dark'}
            onClick={() => window.location.reload()}
          />
        </div>
        <div className="absolute sm:w-[1050px] md:w-md mt-[700px] text-left flex flex-row text-black font-semibold md:text-h1 sm:text-h2">
          What we{' '}
          <div className="text-cblue sm:mx-[5px] md:mx-[9px]">strive</div> in
        </div>
        <Graphics />
      </div>
      {/* BODY 2 */}
      <div className="grid sm:grid-rows-3 md:grid-rows-2 sm:grid-cols-2 md:grid-cols-3 gap-[30px] sm:ml-[60px] mb-[60px] sm:w-sm md:w-md">
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
    </main>

    <Footer />
  </div>
)

export default Home
