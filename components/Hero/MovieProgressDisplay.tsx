import { humanFriendlyMovieDuration } from '@/utils/timeHelpers'
import Typography from '../Typography'
import { VariantProps, cva } from 'class-variance-authority'

const movieProgressDisplay = cva('absolute h-full rounded-full', {
  variants: {
    color: {
      white: 'bg-white',
      red: 'bg-ott-red-2',
    },
  },
})

type MovieProgressDisplayProps = VariantProps<typeof movieProgressDisplay> & {
  duration: number
  watched: number
}

export default function MovieProgressDisplay({
  duration,
  watched,
  color,
}: Readonly<MovieProgressDisplayProps>) {
  const remainingTime = humanFriendlyMovieDuration(duration - watched)
  const watchedPercentage = (watched / duration) * 100

  return (
    <div className="flex items-center gap-2.5 w-full">
      <div className="relative w-full max-w-xs h-2">
        <div className="absolute w-full h-full bg-white/20 rounded-full"></div>
        <div
          className={movieProgressDisplay({ color })}
          style={{ width: `${watchedPercentage}%` }}
        ></div>
      </div>

      <Typography variant="p" size="content-sm">
        {remainingTime} remaining
      </Typography>
    </div>
  )
}
