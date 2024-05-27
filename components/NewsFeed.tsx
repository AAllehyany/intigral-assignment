'use client'

import * as Tabs from '@radix-ui/react-tabs'
import Typography from './Typography'
import Container from './Container'
import NewsCard from './NewsCard'

type TabButtonProps = {
  value: string
  children: React.ReactNode
}

function TabButton({ value, children }: Readonly<TabButtonProps>) {
  return (
    <Tabs.Trigger
      value={value}
      className="font-semibold text-white/60 data-[state=active]:text-white text-xl h-16 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-ott-red-2"
    >
      {children}
    </Tabs.Trigger>
  )
}

export default function NewsFeed() {
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
    <Tabs.Root className="w-full flex flex-col gap-12 mt-28">
      <Tabs.List
        className="shrink-0 items-center border-b border-white/20"
        defaultValue="related"
      >
        <Container>
          <div className="flex items-center gap-12">
            <TabButton value="related">Related News</TabButton>
            <TabButton value="tech">Tech</TabButton>
            <TabButton value="business">Business</TabButton>
            <TabButton value="culture">Culture</TabButton>
          </div>
        </Container>
      </Tabs.List>
      <Tabs.Content value="related">
        <Container>
          <div className="grid grid-cols-6 gap-2">
            {news.map((value, idx) => (
              <NewsCard news={value} key={idx} />
            ))}
          </div>
        </Container>
      </Tabs.Content>
    </Tabs.Root>
  )
}
