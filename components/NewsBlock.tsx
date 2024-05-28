'use client'

import { NewsData } from '@/types/news'
import TabsBlock from './TabsBlock/TabsBlock'
import NewsFeed from './NewsFeed'

type NewsBlockProps = {
  categories: string[]
  news: NewsData[][]
}

export default function NewsBlock({
  categories,
  news,
}: Readonly<NewsBlockProps>) {
  let tabs = categories.map((category) => ({
    value: category.toLowerCase().replaceAll(' ', '-'),
    label: category,
  }))

  return (
    <TabsBlock tabs={tabs}>
      {news.map((newsList, idx) => (
        <NewsFeed news={newsList} key={idx} />
      ))}
    </TabsBlock>
  )
}
