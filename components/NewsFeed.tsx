'use client'

import Container from './Container'
import NewsCard from './NewsCard'
import TabsBlock from './TabsBlock/TabsBlock'

export default function NewsFeed() {
  let tabs = [
    { value: 'related', label: 'Related News' },
    { value: 'tech', label: 'Tech' },
    { value: 'culture', label: 'Culture' },
    { value: 'business', label: 'Business' },
  ]
  let news = [
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

  return (
    <TabsBlock tabs={tabs}>
      <Container>
        <div className="grid grid-cols-6 gap-2">
          {news.map((value, idx) => (
            <NewsCard news={value} key={idx} />
          ))}
        </div>
      </Container>
      <Container>
        <div className="grid grid-cols-6 gap-2">
          {news.map((value, idx) => (
            <NewsCard news={value} key={idx} />
          ))}
        </div>
      </Container>
    </TabsBlock>
  )
}
