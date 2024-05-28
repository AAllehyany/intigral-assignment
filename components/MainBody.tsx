import { ReactNode } from 'react'

export default function MainBody({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <div className="flex flex-col gap gap-12">{children}</div>
}
