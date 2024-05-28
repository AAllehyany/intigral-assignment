import { NewsData } from '@/types/news'
import Container from './Container'
import NewsCard from './NewsCard'
import Link from 'next/link'

type NewsFeedProps = {
  news: NewsData[]
}

export default function NewsFeed({ news }: Readonly<NewsFeedProps>) {
  return (
    <Container>
      <div className="grid grid-cols-6 gap-2">
        {news.map((value, idx) => (
          <Link href="#" key={idx}>
            <NewsCard news={value} />
          </Link>
        ))}
      </div>
    </Container>
  )
}
