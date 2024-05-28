import { MovieData } from '@/types/movies'
import { VariantProps, cva } from 'class-variance-authority'
import Image from 'next/image'
import Typography from '../Typography'

const railCard = cva('h-full object-cover', {
  variants: {
    direction: {
      vertical: 'aspect-[257/343] w-[240px] ',
      horizontal: 'aspect-video w-[270px]',
    },
  },
})

type RailCardProps = VariantProps<typeof railCard> & {
  movie: MovieData
}

export default function RailCard({
  movie,
  direction,
}: Readonly<RailCardProps>) {
  return (
    <div className="flex flex-col gap-3 shrink-0 transition duration-100 ">
      <Image
        src={movie.thumbnail}
        alt=""
        width={1920}
        height={1080}
        className={railCard({ direction })}
      />

      <Typography variant="p" size="content-base">
        {movie.title}
      </Typography>
    </div>
  )
}
