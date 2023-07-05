import { TeamGridData } from '@/const/grid'
import { useSnapCarousel } from 'react-snap-carousel'
import { ImgCarousel } from '../Cards'
import TeamCard from '../Cards/TeamCard'

const ImageCarousel: React.FC<ImgCarousel> = ({ executeScroll }) => {
  const { scrollRef } = useSnapCarousel()
  return (
    <nav ref={scrollRef} className="flex overflow-auto space-x-[30px] py-[30px] snap-x">
      {TeamGridData.map((item, key) => (
        <div className="flex w-[330px] " key={key}>
          <TeamCard
            key={key}
            title={item.title}
            text={item.text}
            img={item.img}
            onClickDiv={executeScroll}
          />
        </div>
      ))}
    </nav>
  )
}

export default ImageCarousel
