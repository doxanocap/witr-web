import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Graphics from '@/icons/graphics.svg'

const Home = () => (
  <div>
    <Header />
    <main className="flex flex-col min-h-screen bg-cwhite pl-[255px] pr-[150px]">
      {/* BODY 1 */}
      <div className="flex float-left  text-center h-[800px]">
        <div className="flex items-center w-[650px] ">
          <p className="flex float-right font-black text-left text-h1 text-black">
            Transform Your Business with us Novaflare - Your Trusted IT Partner
          </p>
        </div>
        <Graphics />
      </div>
    </main>
    <Footer />
  </div>
)

export default Home
