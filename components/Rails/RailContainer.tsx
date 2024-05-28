import RailCard from './RailCard'

export default function RailContainer() {
  const latestMovie = {
    title: 'Pacific Rim Uprising',
    releaseYear: 2008,
    director: 'Jon Favreau',
    duration: 7500, //2h 5min,
    watched: 4920,
    rating: 4,
    thumbnail: '/header-thumbnail.jfif',
    description: `From film studios to streaming services to online publishers, our solutions enable companies to implement more efficient digital content strategies`,
  }
  return (
    <div className="w-full flex overflow-x-hidden gap-2 items-center overflow-y-hidden">
      <RailCard direction="horizontal" movie={latestMovie} />
      <RailCard direction="horizontal" movie={latestMovie} />
      <RailCard direction="horizontal" movie={latestMovie} />
      <RailCard direction="horizontal" movie={latestMovie} />
      <RailCard direction="horizontal" movie={latestMovie} />
      <RailCard direction="horizontal" movie={latestMovie} />
      <RailCard direction="horizontal" movie={latestMovie} />
      <RailCard direction="horizontal" movie={latestMovie} />
      <RailCard direction="horizontal" movie={latestMovie} />
      <RailCard direction="horizontal" movie={latestMovie} />
      <RailCard direction="horizontal" movie={latestMovie} />
    </div>
  )
}
