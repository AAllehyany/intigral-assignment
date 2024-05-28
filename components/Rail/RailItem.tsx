import { ReactNode } from 'react'

type RailItemProps = {
  children: ReactNode
  width: number
}
export default function RailItem({ children, width }: Readonly<RailItemProps>) {
  return (
    <div
      className="w-full shrink-0 grow-0 p-1"
      style={{
        flexBasis: `${width}%`,
        maxWidth: `${width}%`,
      }}
    >
      {children}
    </div>
  )
}
