import { VariantProps, cva } from 'class-variance-authority'
import ArrowLeftIcon from '../icons/ArrowLeftIcon'
import ArrowRightIcon from '../icons/ArrowRightIcon'

const railControls = cva(
  'w-12 h-full absolute flex justify-center items-center top-0 z-2 text-white',
  {
    variants: {
      arrow: {
        left: 'left-0',
        right: 'right-0',
      },
      shape: {
        dark: 'bg-black/60 hover:bg-black/80',
        transparent: '',
      },
    },
    defaultVariants: {
      shape: 'dark',
    },
  },
)

type RailControlsProps = VariantProps<typeof railControls> & {
  handler: () => void
  direction: 'left' | 'right'
  size: 'lg' | 'sm'
}

export default function RailControls({
  handler,
  direction,
  arrow,
  size,
  shape,
}: Readonly<RailControlsProps>) {
  return (
    <button onClick={handler} className={railControls({ arrow, shape })}>
      {direction === 'left' && size === 'lg' && (
        <svg
          width="8"
          height="17"
          viewBox="0 0 8 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-6 fill-current"
        >
          <path opacity="0.6" d="M8 16.5L6.99382e-07 8.5L8 0.5" />
        </svg>
      )}

      {direction === 'left' && size === 'sm' && <ArrowLeftIcon />}

      {direction === 'right' && size === 'lg' && (
        <svg
          width="8"
          height="17"
          viewBox="0 0 8 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-6 fill-current"
        >
          <path
            opacity="0.6"
            d="M0 16.5L8 8.5L-1.39876e-06 0.5"
            fill="#F2F2F2"
          />
        </svg>
      )}

      {direction === 'right' && size === 'sm' && <ArrowRightIcon />}
    </button>
  )
}
