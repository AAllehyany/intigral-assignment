import Header from '@/components/Header'
import HeaderThumbnail from '@/components/HeaderThumbnail'
import Hero from '@/components/Hero/Hero'
import NewsFeed from '@/components/NewsFeed'
import Image from 'next/image'

export default function Home() {
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
    <>
      <HeaderThumbnail image={latestMovie.thumbnail} />
      <Header />
      <Hero movie={latestMovie} />
      <NewsFeed />
    </>
  )
}
