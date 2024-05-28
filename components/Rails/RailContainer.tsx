'use client'

import { useHover } from '@uidotdev/usehooks'
import RailCard from './RailCard'
import RailLeftButton from './RailLeftButton'
import RailRightButton from './RailRightButton'
import Link from 'next/link'
import { useRef } from 'react'

export default function RailContainer({
  direction,
}: {
  direction: 'horizontal' | 'vertical'
}) {
  const ref = useRef(null)

  const handleScroll = (direction: number) => {
    return
  }
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
      className="group max-w-full overflow-x-hidden w-full flex gap-2 items-center overflow-y-visible relative"
      ref={ref}
    >
      <Link href="#">
        <RailCard
          width={direction === 'vertical' ? 'tall' : 'normal'}
          aspect={direction}
          movie={latestMovie}
        />
      </Link>
      <Link href="#">
        <RailCard
          width={direction === 'vertical' ? 'tall' : 'normal'}
          aspect={direction}
          movie={latestMovie}
        />
      </Link>
      <Link href="#">
        <RailCard
          width={direction === 'vertical' ? 'tall' : 'normal'}
          aspect={direction}
          movie={latestMovie}
        />
      </Link>
      <Link href="#">
        <RailCard
          width={direction === 'vertical' ? 'tall' : 'normal'}
          aspect={direction}
          movie={latestMovie}
        />
      </Link>
      <Link href="#">
        <RailCard
          width={direction === 'vertical' ? 'tall' : 'normal'}
          aspect={direction}
          movie={latestMovie}
        />
      </Link>
      <Link href="#">
        <RailCard
          width={direction === 'vertical' ? 'tall' : 'normal'}
          aspect={direction}
          movie={latestMovie}
        />
      </Link>
      <Link href="#">
        <RailCard
          width={direction === 'vertical' ? 'tall' : 'normal'}
          aspect={direction}
          movie={latestMovie}
        />
      </Link>
      <Link href="#">
        <RailCard
          width={direction === 'vertical' ? 'tall' : 'normal'}
          aspect={direction}
          movie={latestMovie}
        />
      </Link>
      <Link href="#">
        <RailCard
          width={direction === 'vertical' ? 'tall' : 'normal'}
          aspect={direction}
          movie={latestMovie}
        />
      </Link>
      <Link href="#">
        <RailCard
          width={direction === 'vertical' ? 'tall' : 'normal'}
          aspect={direction}
          movie={latestMovie}
        />
      </Link>
      <Link href="#">
        <RailCard
          width={direction === 'vertical' ? 'tall' : 'normal'}
          aspect={direction}
          movie={latestMovie}
        />
      </Link>

      <div className="hidden group-hover:flex absolute left-0 h-full z-2">
        <RailLeftButton handler={() => handleScroll(-1)} />
      </div>
      <div className="hidden group-hover:flex absolute right-0 h-full z-2">
        <RailRightButton handler={() => handleScroll(1)} />
      </div>
    </div>
  )
}
