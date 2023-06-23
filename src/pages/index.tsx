import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Graphics from '@/icons/graphics.svg'

const Home = () => (
  <div className="min-w-[1080px]">
    <Header />
    <main className="flex flex-col items-center min-h-screen bg-cwhite">
      {/* BODY 1 */}
      <div className="flex bg-yellow-300 h-[800px] sm:w-[1080px] w-[1080px] lg:w-[1410px] text-center px-[30px] items-center justify-center">
        {/* <div className="flex w-[650px] ">
          <div className="flex flex-col justify-center font-black text-left text-black text-h1">
            <p className="">
              Transform Your Business with us
            </p>
            <div className="flex">
              <p className="text-cblue">Witr.kz </p>
              <p className="ml-3"> - Your Trusted IT Partner </p>
            </div>
          </div>
        </div>
        <Graphics /> */}
      </div>
    </main>
    <Footer />
  </div>
)

export default Home
