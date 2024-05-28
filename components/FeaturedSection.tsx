import { ReactNode } from 'react'
import Container from './Container'

type FeaturedSectionProps = {
  title: string
  children: ReactNode
}

export default function FeaturedSection({
  title,
  children,
}: Readonly<FeaturedSectionProps>) {
  return (
    <section className="flex flex-col gap-8">
      <Container>
        <div className="flex flex-col gap-4">
          <h2 className="uppercase font-bold font-open text-lg text-white">
            {title}
          </h2>
          <div className="w-12 h-1 bg-ott-red-1 flex"></div>
        </div>
      </Container>

      {children}
    </section>
  )
}
