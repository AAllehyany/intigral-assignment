import PlayIcon from '../icons/PlayIcon'

type RailThumbnailOverlayProps = {
  showProgress: boolean
  watched: number
  duration: number
}

export default function RailThumbnailOverlay({
  showProgress,
  watched,
  duration,
}: Readonly<RailThumbnailOverlayProps>) {
  return (
    <div className="w-full h-full absolute inset-0 z-1 bg-black/10 border-2 border-white flex items-center justify-center text-white">
      <PlayIcon />
    </div>
  )
}
