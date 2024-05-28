import { MovieData } from '@/types/movies'
/**
 * Fetches data for a featured movie.
 *
 * Simulates an asynchronous data fetch by using a Promise and a timeout.
 *
 * @returns {Promise<MovieData>} A Promise that resolves with a `MovieData` object representing the featured movie.
 */
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
        ageRating: 18,
        thumbnail: '/header-thumbnail.jfif',
        description: `From film studios to streaming services to online publishers, our solutions enable companies to implement more efficient digital content strategies`,
      })
    }, 100)
  })
}
