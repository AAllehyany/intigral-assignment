import { ReactNode } from 'react'
import RailItem from './RailItem'

type RailsSliderProps = {
  rowWidth: number
  selected: number
  items: ReactNode[]
}

export default function RailsSilder({
  rowWidth,
  selected,
  items,
}: Readonly<RailsSliderProps>) {
  return (
    <div
      className="flex w-full items-start transition duration-200"
      style={{
        transform: `translateX(${-100 * selected}%)`,
      }}
    >
      {items.map((child, idx) => (
        <RailItem width={rowWidth} key={idx}>
          {child}
        </RailItem>
      ))}
    </div>
  )
}
