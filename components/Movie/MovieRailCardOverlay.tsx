import PlayIcon from '../icons/PlayIcon'
import MovieProgressBar from './MovieProgressBar'

type MovieRailCardOverlayProps = {
  showProgress: boolean
  watched: number
  duration: number
}

export default function MovieRailCardOverlay({
  showProgress,
  watched,
  duration,
}: Readonly<MovieRailCardOverlayProps>) {
  return (
    <div className="w-full h-full absolute inset-0 z-1 bg-black/10 border-2 border-white flex items-center justify-center text-white relative">
      <PlayIcon />

      {showProgress && (
        <div className="absolute bottom-0 w-full p-1">
          <MovieProgressBar watched={watched} duration={duration} color="red" />
        </div>
      )}
    </div>
  )
}
