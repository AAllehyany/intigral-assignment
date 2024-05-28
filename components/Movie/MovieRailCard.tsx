import { MovieData } from '@/types/movies'
import { cva, VariantProps } from 'class-variance-authority'
import Typography from '../Typography'
import MovieRailCardThumbnail from './MovieRailCardThumbnail'

const movieRailCard = cva('flex flex-col gap-3 shrink-0 cursor-pointer', {
  variants: {
    width: {
      normal: 'w-full',
      tall: 'w-full',
    },
  },
})

type MovieRailCardProps = VariantProps<typeof movieRailCard> & {
  movie: MovieData
  aspect: 'horizontal' | 'vertical'
}

export default function MovieRailCard({
  movie,
  aspect,
  width,
}: Readonly<MovieRailCardProps>) {
  return (
    <div className={movieRailCard({ width })}>
      <MovieRailCardThumbnail
        src={movie.thumbnail}
        watched={movie.watched}
        duration={movie.duration}
        showProgress={aspect === 'horizontal'}
        aspect={aspect}
      />

      <div className="w-full h-4 flex items-center">
        <Typography variant="p" size="content-base">
          {movie.title}
        </Typography>
      </div>
    </div>
  )
}
