import { MovieData } from '@/types/movies'
import { VariantProps, cva } from 'class-variance-authority'

const railCard = cva()
type RailCardProps = VariantProps<typeof railCard> & {
  movie: MovieData
}

export default function RailCard({ movie }: Readonly<RailCardProps>) {}
