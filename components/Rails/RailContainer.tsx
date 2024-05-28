'use client'

import { useHover } from '@uidotdev/usehooks'
import RailCard from './RailCard'
import RailLeftButton from './RailLeftButton'
import RailRightButton from './RailRightButton'

export default function RailContainer({
  direction,
}: {
  direction: 'horizontal' | 'vertical'
}) {
  const [ref, hovering] = useHover()

  const latestMovie = {
    title: 'Pacific Rim Uprising',
    releaseYear: 2008,
    director: 'Jon Favreau',
    duration: 7500, //2h 5min,
    watched: 4920,
    rating: 4,
    thumbnail: '/header-thumbnail.jfif',
    description: `From film studios to streaming services to online publishers, our solutions enable companies to implement more efficient digital content strategies`,
  }
  return (
    <div
      className="max-w-full overflow-x-hidden w-full flex gap-2 items-center overflow-y-visible relative"
      ref={ref}
    >
      <RailCard
        width={direction === 'vertical' ? 'tall' : 'normal'}
        aspect={direction}
        movie={latestMovie}
      />
      <RailCard
        width={direction === 'vertical' ? 'tall' : 'normal'}
        aspect={direction}
        movie={latestMovie}
      />
      <RailCard
        width={direction === 'vertical' ? 'tall' : 'normal'}
        aspect={direction}
        movie={latestMovie}
      />
      <RailCard
        width={direction === 'vertical' ? 'tall' : 'normal'}
        aspect={direction}
        movie={latestMovie}
      />
      <RailCard
        width={direction === 'vertical' ? 'tall' : 'normal'}
        aspect={direction}
        movie={latestMovie}
      />
      <RailCard
        width={direction === 'vertical' ? 'tall' : 'normal'}
        aspect={direction}
        movie={latestMovie}
      />
      <RailCard
        width={direction === 'vertical' ? 'tall' : 'normal'}
        aspect={direction}
        movie={latestMovie}
      />
      <RailCard
        width={direction === 'vertical' ? 'tall' : 'normal'}
        aspect={direction}
        movie={latestMovie}
      />
      <RailCard
        width={direction === 'vertical' ? 'tall' : 'normal'}
        aspect={direction}
        movie={latestMovie}
      />
      <RailCard
        width={direction === 'vertical' ? 'tall' : 'normal'}
        aspect={direction}
        movie={latestMovie}
      />
      <RailCard
        width={direction === 'vertical' ? 'tall' : 'normal'}
        aspect={direction}
        movie={latestMovie}
      />

      {hovering && (
        <div className="absolute left-0 h-full z-2">
          <RailLeftButton />
        </div>
      )}
      {hovering && (
        <div className="absolute right-0 h-full z-2">
          <RailRightButton />
        </div>
      )}
    </div>
  )
}
