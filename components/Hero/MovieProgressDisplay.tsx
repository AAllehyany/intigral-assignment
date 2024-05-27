import { humanFriendlyMovieDuration } from '@/utils/timeHelpers'
import Typography from '../Typography'

type MovieProgressDisplayProps = {
  duration: number
  watched: number
}

export default function MovieProgressDisplay({
  duration,
  watched,
}: Readonly<MovieProgressDisplayProps>) {
  const remainingTime = humanFriendlyMovieDuration(duration - watched)
  const watchedPercentage = (watched / duration) * 100

  return (
    <div className="flex items-center gap-2.5 w-full">
      <div className="relative w-full max-w-xs h-2">
        <div className="absolute w-full h-full bg-white/20 rounded-full"></div>
        <div
          className="absolute h-full bg-white rounded-full"
          style={{ width: `${watchedPercentage}%` }}
        ></div>
      </div>

      <Typography variant="p" size="content-sm">
        {remainingTime} remaining
      </Typography>
    </div>
  )
}
