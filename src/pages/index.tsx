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
      <div className="flex relative h-[800px] sm:w-sm md:w-md text-center items-center justify-end">
        <div className="absolute left-[30px]">
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
        <div className="absolute left-[30px] bottom-[15px] text-left flex flex-row text-black font-semibold md:text-h1 sm:text-h2">
          What we
          <div className="text-cblue sm:mx-[5px] md:mx-[9px]">strive</div> in
        </div>
        <Graphics />
      </div>
      {/* BODY 2 */}
      <div className="grid justify-start sm:w-sm md:w-md gap-x-0 md:gap-y-[35px] sm:ml-[30px] sm:gap-y-[55px] sm:grid-rows-3 md:grid-rows-2 sm:grid-cols-2 md:grid-cols-3">
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
      {/* BODY 3 */}
      <div className="flex w-full justify-center items-start h-[450px] my-[105px] bg-white">
        <div className="flex flex-row my-[55px] text-black font-semibold md:text-h1 sm:text-h2">
          What we
          <div className="text-cblue sm:mx-[5px] md:mx-[9px]">strive</div> in
        </div>
      </div>
      {/* BODY 4 */}
      <div className="flex flex-col items-center w-full h-[1000px] bg-white">
        <div className="flex flex-row my-[55px] text-black font-semibold md:text-h1 sm:text-h2">
          What we
          <div className="text-cblue sm:mx-[5px] md:mx-[9px]">strive</div> in
        </div>
        <div className="flex flex-row ">
          <div className="flex w-[600px] h-[500px] mx-4 bg-gray-600"></div>
          <div className="flex w-[600px] h-[500px] mx-4 bg-gray-600"></div>
        </div>
      </div>
      <div className="flex w-full sm:w-sm md:w-md ">
        <div className="flex flex-row my-[55px] text-black font-semibold md:text-h1 sm:text-h2">
          Meet our
          <div className="text-cblue sm:mx-[5px] md:mx-[9px]">team</div>
        </div>
      </div>

      {/* BODY 4 */}
    </main>

    <Footer />
  </div>
)

export default Home
