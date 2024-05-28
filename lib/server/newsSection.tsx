import { NewsData } from '@/types/news'

type NewsResponse = {
  categories: string[]
  news: NewsData[][]
}

/**
 * Fetches the latest news with associated categories.
 *
 * Simulates an asynchronous data fetch by returning a Promise that resolves
 * after a short timeout.
 *
 * @returns {Promise<NewsResponse>} A Promise that resolves to a `NewsResponse` object
 * containing the categories and their associated news items.
 */
export async function fetchLatestNewsWithCategories(): Promise<NewsResponse> {
  const categories = ['Related News', 'Tech', 'Culture', 'Business']
  const news = [
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

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        categories: categories,
        news: Array(categories.length).fill(news),
      })
    }, 100)
  })
}
