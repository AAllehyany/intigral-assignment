import Header from '@/components/Header'
import Hero from '@/components/Hero/Hero'
import Image from 'next/image'

export default function Home() {
  const latestMovie = {
    title: 'Pacific Rim Uprising',
    releaseYear: 2008,
    director: 'Jon Favreau',
    duration: 7500, //2h 5minutes,
    watched: 4920,
    rating: 4,
    description: `From film studios to streaming services to online publishers, our solutions enable companies to implement more efficient digital content strategies`,
  }
  return (
    <>
      <Header />
      <Hero movie={latestMovie} />
    </>
  )
}
