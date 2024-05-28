import { NewsData } from '@/types/news'
import Container from './Container'
import NewsCard from './NewsCard'

type NewsFeedProps = {
  news: NewsData[]
}

export default function NewsFeed({ news }: Readonly<NewsFeedProps>) {
  return (
    <Container>
      <div className="grid grid-cols-6 gap-2">
        {news.map((value, idx) => (
          <NewsCard news={value} key={idx} />
        ))}
      </div>
    </Container>
  )
}
