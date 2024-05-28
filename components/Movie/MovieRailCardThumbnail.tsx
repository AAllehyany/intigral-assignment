'use client'

import { useHover } from '@uidotdev/usehooks'
import { VariantProps, cva } from 'class-variance-authority'
import Image from 'next/image'
import MovieRailCardOverlay from './MovieRailCardOverlay'

const movieRailCardThumbnail = cva(
  'group w-full relative hover:scale-105 transition duration-100 origin-top',
  {
    variants: {
      aspect: {
        horizontal: 'aspect-video',
        vertical: 'aspect-[257/343]',
      },
    },
    defaultVariants: {
      aspect: 'horizontal',
    },
  },
)

type MovieRailCardThumbnailProps = VariantProps<
  typeof movieRailCardThumbnail
> & {
  src: string
  duration: number
  watched: number
  showProgress: boolean
}

export default function MovieRailCardThumbnail({
  src,
  duration,
  watched,
  showProgress,
  aspect,
}: Readonly<MovieRailCardThumbnailProps>) {
  const [ref, hovering] = useHover()

  return (
    <div className={movieRailCardThumbnail({ aspect })} ref={ref}>
      <div className="absolute w-full h-full inset-0 z-1">
        <Image
          src={src}
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </div>
      {hovering && (
        <MovieRailCardOverlay
          duration={duration}
          showProgress={showProgress}
          watched={watched}
        />
      )}
    </div>
  )
}
