import FeaturedSection from '@/components/FeaturedSection'
import Hero from '@/components/Hero/Hero'
import MainBody from '@/components/MainBody'
import MovieRailCard from '@/components/Movie/MovieRailCard'
import NewsBlock from '@/components/NewsBlock'
import Rail from '@/components/Rail/Rail'
import { fetchFeaturedMovie } from '@/lib/server/featuredMovie'
import { fetchLatestNewsWithCategories } from '@/lib/server/newsSection'
import Link from 'next/link'

export default async function Home() {
  const featuredMovie = await fetchFeaturedMovie()
  const latestNews = await fetchLatestNewsWithCategories()

  const trendingMovies = Array(24).fill(featuredMovie)

  return (
    <>
      <Hero movie={featuredMovie} />
      <MainBody>
        <NewsBlock news={latestNews.news} categories={latestNews.categories} />
        <FeaturedSection title="Featured by System">
          <Rail rows={7}>
            {trendingMovies.map((m, k) => (
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
