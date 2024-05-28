import { MovieData } from '@/types/movies'
import { humanFriendlyMovieDuration } from '@/utils/timeHelpers'
import CallToAction from '../CallToAction'
import StarRating from '../StarRating'
import Typography from '../Typography'
import VerticalBar from '../VerticalBar'
import PlayIconSmall from '../icons/PlayIconSmall'
import PlusIcon from '../icons/PlusIcon'
import MovieProgressDisplay from './MovieProgressDisplay'

type HeroMovieDataProps = {
  movie: MovieData
}

function MovieMetadata({ movie }: Readonly<{ movie: MovieData }>) {
  return (
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
  )
}
export default function HeroMovieData({ movie }: Readonly<HeroMovieDataProps>) {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col gap-4">
        <Typography variant="heading-1" size="heading-lg">
          {movie.title}
        </Typography>
        <MovieMetadata movie={movie} />
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
