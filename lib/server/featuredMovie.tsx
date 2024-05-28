import { MovieData } from '@/types/movies'

export async function fetchFeaturedMovie(): Promise<MovieData> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        title: 'Pacific Rim Uprising',
        releaseYear: 2008,
        director: 'Jon Favreau',
        duration: 7500, //2h 5min,
        watched: 4920,
        rating: 4,
        thumbnail: '/header-thumbnail.jfif',
        description: `From film studios to streaming services to online publishers, our solutions enable companies to implement more efficient digital content strategies`,
      })
    }, 100)
  })
}
