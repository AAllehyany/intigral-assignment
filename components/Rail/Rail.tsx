'use client'
import RailControls from './RailControls'
import RailItem from './RailItem'
import { ReactNode, useState } from 'react'
import RailsSlider from './RailsSlider'

type RailProps = {
  rows: number
  children: ReactNode[]
  controls?: 'lg' | 'sm'
  shape?: 'dark' | 'transparent'
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
    <div
      className="w-full overflow-x-hidden flex justify-center relative"
      data-testid="rail-container"
      data-current={currentIndex}
    >
      <RailsSlider
        selected={currentIndex}
        items={children}
        rowWidth={rowWidth}
      />

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
