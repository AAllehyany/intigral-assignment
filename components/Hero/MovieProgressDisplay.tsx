import { humanFriendlyMovieDuration } from '@/utils/timeHelpers'
import Typography from '../Typography'
import { VariantProps, cva } from 'class-variance-authority'
import MovieProgressBar from '../MovieProgress'

type MovieProgressDisplayProps = {
  duration: number
  watched: number
}

export default function MovieProgressDisplay({
  duration,
  watched,
}: Readonly<MovieProgressDisplayProps>) {
  const remainingTime = humanFriendlyMovieDuration(duration - watched)

  return (
    <div className="flex items-center gap-2.5 w-full">
      <MovieProgressBar watched={watched} duration={duration} color="white" />

      <Typography variant="p" size="content-sm">
        {remainingTime} remaining
      </Typography>
    </div>
  )
}
