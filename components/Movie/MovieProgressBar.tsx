import { VariantProps, cva } from 'class-variance-authority'

const movieProgressBar = cva('absolute h-full rounded-full', {
  variants: {
    color: {
      white: 'bg-white',
      red: 'bg-ott-red-2',
    },
  },
})

type MovieProgressBarProps = VariantProps<typeof movieProgressBar> & {
  duration: number
  watched: number
}

export default function MovieProgressBar({
  duration,
  watched,
  color,
}: Readonly<MovieProgressBarProps>) {
  const watchedPercentage = (watched / duration) * 100

  return (
    <div className="relative w-full max-w-xs h-1">
      <div className="absolute w-full h-full bg-white/20 rounded-full"></div>
      <div
        className={movieProgressBar({ color })}
        style={{ width: `${watchedPercentage}%` }}
      ></div>
    </div>
  )
}
