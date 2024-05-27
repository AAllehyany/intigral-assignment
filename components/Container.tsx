import { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
}

export default function Container({ children }: Readonly<ContainerProps>) {
  return <div className="w-full max-w-ott-width mx-auto">{children}</div>
}
