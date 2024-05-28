import FeaturedSection from '@/components/FeaturedSection'
import Header from '@/components/Header/Header'
import HeaderThumbnail from '@/components/Header/HeaderThumbnail'
import Hero from '@/components/Hero/Hero'
import MainBody from '@/components/MainBody'
import NewsFeed from '@/components/NewsFeed'
import RailContainer from '@/components/Rails/RailContainer'
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
      <MainBody>
        <NewsFeed />
        <FeaturedSection title="Featured by System">
          <RailContainer direction="vertical" />
        </FeaturedSection>

        <FeaturedSection title="Trending Content">
          <RailContainer direction="horizontal" />
        </FeaturedSection>

        <FeaturedSection title="featured by system">
          <RailContainer direction="horizontal" />
        </FeaturedSection>

        <FeaturedSection title="featured by system">
          <RailContainer direction="horizontal" />
        </FeaturedSection>

        <FeaturedSection title="featured by system">
          <RailContainer direction="horizontal" />
        </FeaturedSection>
      </MainBody>
    </>
  )
}
