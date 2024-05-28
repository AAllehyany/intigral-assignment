'use client'

import { useHover } from '@uidotdev/usehooks'
import { VariantProps, cva } from 'class-variance-authority'
import Image from 'next/image'
import RailThumbnailOverlay from './RailThumbnailOverlay'
import { watch } from 'fs'

const railCardThumbnail = cva(
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

type RailCardThumbnailProps = VariantProps<typeof railCardThumbnail> & {
  src: string
  duration: number
  watched: number
  showProgress: boolean
}

export default function RailCardThumbnail({
  src,
  duration,
  watched,
  showProgress,
  aspect,
}: Readonly<RailCardThumbnailProps>) {
  const [ref, hovering] = useHover()

  return (
    <div className={railCardThumbnail({ aspect })} ref={ref}>
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
        <RailThumbnailOverlay
          duration={duration}
          showProgress={showProgress}
          watched={watched}
        />
      )}
    </div>
  )
}
