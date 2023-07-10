import { TeamGridData } from '@/const/grid'
import { useSnapCarousel } from 'react-snap-carousel'
import TeamCard from '../Cards/TeamCard'

const ImageCarousel = () => {
  const { scrollRef } = useSnapCarousel()
  return (
    <nav
      ref={scrollRef}
      className="flex overflow-x-auto scrollbar scrollbar-w-2 scrollbar-h-2 scrollbar-thumb-gray-900 scrollbar-thumb-rounded-md space-x-[30px] py-[30px] snap-x"
    >
      {TeamGridData.map((item, key) => (
        <div className="flex w-[330px] " key={key}>
          <TeamCard
            key={key}
            title={item.title}
            text={item.text}
            img={item.img}
            onClickDiv={() => {}}
          />
        </div>
      ))}
    </nav>
  )
}

export default ImageCarousel
