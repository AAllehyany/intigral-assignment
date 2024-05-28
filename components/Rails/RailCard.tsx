import { MovieData } from '@/types/movies'
import { VariantProps, cva } from 'class-variance-authority'
import Typography from '../Typography'
import RailCardThumbnail from './RailCardThumbnail'

const railCard = cva('flex flex-col gap-3 shrink-0 cursor-pointer', {
  variants: {
    width: {
      normal: 'w-full',
      tall: 'w-full',
    },
  },
})

type RailCardProps = VariantProps<typeof railCard> & {
  movie: MovieData
  aspect: 'horizontal' | 'vertical'
}

export default function RailCard({
  movie,
  aspect,
  width,
}: Readonly<RailCardProps>) {
  return (
    <div className={railCard({ width })}>
      <RailCardThumbnail
        src={movie.thumbnail}
        watched={0}
        duration={0}
        showProgress={false}
        aspect={aspect}
      />

      <Typography variant="p" size="content-base">
        {movie.title}
      </Typography>
    </div>
  )
}
