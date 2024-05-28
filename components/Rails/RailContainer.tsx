import RailCard from './RailCard'
import RailLeftButton from './RailLeftButton'
import RailRightButton from './RailRightButton'

export default function RailContainer({
  direction,
}: {
  direction: 'horizontal' | 'vertical'
}) {
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
    <div className="group w-full flex overflow-x-hidden gap-2 items-center  relative h-fit">
      <RailCard direction={direction} movie={latestMovie} />
      <RailCard direction={direction} movie={latestMovie} />
      <RailCard direction={direction} movie={latestMovie} />
      <RailCard direction={direction} movie={latestMovie} />
      <RailCard direction={direction} movie={latestMovie} />
      <RailCard direction={direction} movie={latestMovie} />
      <RailCard direction={direction} movie={latestMovie} />
      <RailCard direction={direction} movie={latestMovie} />
      <RailCard direction={direction} movie={latestMovie} />
      <RailCard direction={direction} movie={latestMovie} />
      <RailCard direction={direction} movie={latestMovie} />

      <div className="hidden group-hover:flex absolute left-0 h-full z-2">
        <RailLeftButton />
      </div>
      <div className="hidden group-hover:flex absolute right-0 h-full z-2">
        <RailRightButton />
      </div>
    </div>
  )
}
