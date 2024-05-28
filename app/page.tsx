import FeaturedSection from '@/components/FeaturedSection'
import GlowLeft from '@/components/GlowLeft'
import GlowRight from '@/components/GlowRight'
import Hero from '@/components/Hero/Hero'
import MainBody from '@/components/MainBody'
import MovieRailCard from '@/components/Movie/MovieRailCard'
import NewsBlock from '@/components/News/NewsBlock'
import Rail from '@/components/Rail/Rail'
import { fetchFeaturedMovie } from '@/lib/server/featuredMovie'
import { fetchLatestNewsWithCategories } from '@/lib/server/newsSection'
import Link from 'next/link'

export default async function Home() {
  const featuredMovie = await fetchFeaturedMovie()
  const latestNews = await fetchLatestNewsWithCategories()

  const trendingMovies = Array(24).fill(featuredMovie)
  const tallMovies = Array(28).fill(featuredMovie)
  const sponsors = [
    'hbo',
    'cinemax',
    'national-geographic',
    'disney',
    'discovery',
  ]
  return (
    <>
      <GlowLeft />
      <GlowRight />
      <Hero movie={featuredMovie} sponsors={sponsors} />
      <MainBody>
        <NewsBlock news={latestNews.news} categories={latestNews.categories} />
        <FeaturedSection title="Featured by System">
          <Rail rows={7}>
            {tallMovies.map((m, k) => (
              <Link href="#" className="w-full" key={k}>
                <MovieRailCard width="normal" aspect="vertical" movie={m} />
              </Link>
            ))}
          </Rail>
        </FeaturedSection>

        <FeaturedSection title="Trending Content">
          <Rail rows={6}>
            {trendingMovies.map((m, k) => (
              <Link href="#" className="w-full" key={k}>
                <MovieRailCard width="normal" aspect="horizontal" movie={m} />
              </Link>
            ))}
          </Rail>
        </FeaturedSection>

        <FeaturedSection title="Featured By System">
          <Rail rows={7}>
            {tallMovies.map((m, k) => (
              <Link href="#" className="w-full" key={k}>
                <MovieRailCard width="normal" aspect="horizontal" movie={m} />
              </Link>
            ))}
          </Rail>
        </FeaturedSection>

        <FeaturedSection title="Featured By System">
          <Rail rows={6}>
            {trendingMovies.map((m, k) => (
              <Link href="#" className="w-full" key={k}>
                <MovieRailCard width="normal" aspect="vertical" movie={m} />
              </Link>
            ))}
          </Rail>
        </FeaturedSection>

        <FeaturedSection title="Featured By System">
          <Rail rows={6}>
            {trendingMovies.map((m, k) => (
              <Link href="#" className="w-full" key={k}>
                <MovieRailCard width="normal" aspect="horizontal" movie={m} />
              </Link>
            ))}
          </Rail>
        </FeaturedSection>

        <FeaturedSection title="Featured By System">
          <Rail rows={6}>
            {trendingMovies.map((m, k) => (
              <Link href="#" className="w-full" key={k}>
                <MovieRailCard width="normal" aspect="horizontal" movie={m} />
              </Link>
            ))}
          </Rail>
        </FeaturedSection>

        <FeaturedSection title="Featured By System">
          <Rail rows={6}>
            {trendingMovies.map((m, k) => (
              <Link href="#" className="w-full" key={k}>
                <MovieRailCard width="normal" aspect="horizontal" movie={m} />
              </Link>
            ))}
          </Rail>
        </FeaturedSection>
      </MainBody>
    </>
  )
}
