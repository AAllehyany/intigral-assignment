'use client'
import RailControls from './RailControls'
import RailItem from './RailItem'
import { ReactNode, useState } from 'react'

type RailProps = {
  rows: number
  children: ReactNode[]
  controls: 'lg' | 'sm'
  shape: 'dark' | 'transparent'
}

export default function Rail({
  rows,
  children,
  controls = 'lg',
  shape = 'dark',
}: Readonly<RailProps>) {
  const rowWidth = 100 / rows

  const maxPages = Math.ceil(children.length / rows)
  const [currentIndex, setCurrentIndex] = useState(0)

  const updateIndex = (value: number) => {
    let calculatedIndex = currentIndex + value
    if (calculatedIndex < 0) calculatedIndex = 0
    let newIndex = calculatedIndex % maxPages

    setCurrentIndex(newIndex)
  }

  return (
    <div className="w-full overflow-x-hidden flex justify-center relative">
      <div
        className="flex w-full items-start transition duration-200"
        style={{
          transform: `translateX(${-100 * currentIndex}%)`,
        }}
      >
        {children.map((child, idx) => (
          <RailItem width={rowWidth} key={idx}>
            {child}
          </RailItem>
        ))}
      </div>

      <RailControls
        size={controls}
        shape={shape}
        arrow="left"
        direction="left"
        handler={() => updateIndex(-1)}
      />
      <RailControls
        size={controls}
        shape={shape}
        arrow="right"
        direction="right"
        handler={() => updateIndex(1)}
      />
    </div>
  )
}
