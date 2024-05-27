import { MovieData } from '@/types/movies'
import Container from '../Container'
import Tag from '../Tag'
import Typography from '../Typography'
import VerticalBar from '../VerticalBar'
import { humanFriendlyMovieDuration } from '@/utils/timeHelpers'
import StarRating from '../StarRating'
import MovieProgressDisplay from './MovieProgressDisplay'
import CallToAction from '../CallToAction'
import PlayIconSmall from '../icons/PlayIconSmall'
import PlusIcon from '../icons/PlusIcon'

type HeroContentProps = {
  movie: MovieData
}

type MovieHeroBannerProps = {
  movie: MovieData
}

function MovieHeroBanner({ movie }: Readonly<MovieHeroBannerProps>) {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col gap-4">
        <Typography variant="heading-1" size="heading-lg">
          {movie.title}
        </Typography>
        <ul className="flex items-center gap-3">
          <li>
            <Typography variant="p" size="body-xs">
              {movie.releaseYear}
            </Typography>
          </li>
          <li>
            <VerticalBar />
          </li>
          <li>
            <Typography variant="p" size="body-xs">
              By {movie.director}
            </Typography>
          </li>
          <li>
            <VerticalBar />
          </li>
          <li>
            <Typography variant="p" size="body-xs">
              {humanFriendlyMovieDuration(movie.duration)}
            </Typography>
          </li>
          <li>
            <StarRating rating={movie.rating} />
          </li>
        </ul>
      </div>

      <Typography variant="p" size="body-base">
        {movie.description}
      </Typography>

      <MovieProgressDisplay duration={movie.duration} watched={movie.watched} />

      <div className="flex items-center gap-7">
        <CallToAction target="#" type="normal" icon={<PlayIconSmall />}>
          Watch
        </CallToAction>
        <CallToAction target="#" type="outline" icon={<PlusIcon />}>
          Add To List
        </CallToAction>
      </div>
    </div>
  )
}

function HeroContent({ movie }: Readonly<HeroContentProps>) {
  return (
    <div className="w-[800px] flex flex-col gap-7">
      <div>
        <Tag shape="default" size="small" type="blue">
          Live
        </Tag>
      </div>
      <MovieHeroBanner movie={movie} />
    </div>
  )
}

type HeroProps = {
  movie: MovieData
}

export default function Hero({ movie }: Readonly<HeroProps>) {
  return (
    <div className="w-full mt-28 p-0">
      <Container>
        <HeroContent movie={movie} />
      </Container>
    </div>
  )
}
