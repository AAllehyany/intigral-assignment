import FeaturedSection from '@/components/FeaturedSection'
import Header from '@/components/Header/Header'
import HeaderThumbnail from '@/components/Header/HeaderThumbnail'
import Hero from '@/components/Hero/Hero'
import MainBody from '@/components/MainBody'
import NewsBlock from '@/components/NewsBlock'
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

  const newsCategories = ['Related News', 'Tech', 'Culture', 'Business']

  let latestNews = [
    {
      title: 'Hit First Case | Coming on 28 Feb',
      url: '#',
      alt: '',
      image: '/news-1.png',
      detail:
        'I want to talk about the hard stuff people wonder about but maybe are embarassed...',
    },
    {
      title: 'Hit First Case | Coming on 28 Feb',
      url: '#',
      alt: '',
      image: '/news-2.png',
      detail:
        'I want to talk about the hard stuff people wonder about but maybe are embarassed...',
    },
    {
      title: 'Hit First Case | Coming on 28 Feb',
      url: '#',
      alt: '',
      image: '/news-3.png',
      detail:
        'I want to talk about the hard stuff people wonder about but maybe are embarassed...',
    },
    {
      title: 'Hit First Case | Coming on 28 Feb',
      url: '#',
      alt: '',
      image: '/news-4.png',
      detail:
        'I want to talk about the hard stuff people wonder about but maybe are embarassed...',
    },
    {
      title: 'Hit First Case | Coming on 28 Feb',
      url: '#',
      alt: '',
      image: '/news-5.png',
      detail:
        'I want to talk about the hard stuff people wonder about but maybe are embarassed...',
    },
    {
      title: 'Hit First Case | Coming on 28 Feb',
      url: '#',
      alt: '',
      image: '/news-6.png',
      detail:
        'I want to talk about the hard stuff people wonder about but maybe are embarassed...',
    },
  ]

  const newsBlockData = [latestNews, latestNews, latestNews, latestNews]

  return (
    <>
      <HeaderThumbnail image={latestMovie.thumbnail} />
      <Header />
      <Hero movie={latestMovie} />
      <MainBody>
        <NewsBlock news={newsBlockData} categories={newsCategories} />
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
