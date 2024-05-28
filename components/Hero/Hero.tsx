import { MovieData } from '@/types/movies'
import Container from '../Container'
import Tag from '../Tag'
import HeroMediaControls from './HeroMediaControls'
import HeroMovieData from './HeroMovieData'
import HeroSponsorsSection from './HeroSponsorsSection'
import HeroThumbnail from './HeroThumbnail'

type HeroContentProps = {
  movie: MovieData
  sponsors: string[]
}

function HeroContent({ movie, sponsors }: Readonly<HeroContentProps>) {
  return (
    <div className="w-[800px] flex flex-col gap-7">
      <div>
        <Tag shape="default" size="small" type="blue">
          Live
        </Tag>
      </div>
      <HeroMovieData movie={movie} />
      <HeroSponsorsSection sponsors={sponsors} />
    </div>
  )
}

type HeroProps = {
  movie: MovieData
  sponsors: string[]
}

export default function Hero({ movie, sponsors }: Readonly<HeroProps>) {
  return (
    <>
      <HeroThumbnail image={movie.thumbnail} />
      <div className="w-full mt-28 p-0 relative">
        <Container>
          <HeroContent movie={movie} sponsors={sponsors} />
        </Container>
        <HeroMediaControls rating={18} />
      </div>
    </>
  )
}
