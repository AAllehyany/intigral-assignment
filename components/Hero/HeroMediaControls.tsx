import Typography from '../Typography'
import MuteIcon from '../icons/MuteIcon'

type HeroMediaProps = {
  rating: number
}

export default function HeroMediaControls({
  rating,
}: Readonly<HeroMediaProps>) {
  return (
    <div className="absolute bottom-0 right-0 flex items-center gap-4">
      <button>
        <MuteIcon />
      </button>
      <div className="flex h-10 items-center border-l-4 border-ott-red-2 px-6 bg-ott-blue-2/60">
        <Typography variant="p" size="heading-sm">
          {rating}+
        </Typography>
      </div>
    </div>
  )
}
