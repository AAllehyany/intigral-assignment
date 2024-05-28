import { NewsData } from '@/types/news'
import Image from 'next/image'
import Typography from '../Typography'

type NewsCardProps = {
  news: NewsData
}

function CardImage({
  src,
  alt,
}: Readonly<{ src: string | undefined; alt: string }>) {
  return (
    <>
      {!src && (
        <div className="w-full bg-gray-400 aspect-video rounded-md"></div>
      )}

      {src && (
        <Image
          src={src}
          width={1920}
          height={1080}
          alt={alt}
          className="aspect-video w-full h-full object-cover rounded-md"
        />
      )}
    </>
  )
}

export default function NewsCard({ news }: Readonly<NewsCardProps>) {
  return (
    <div className="flex flex-col gap-3">
      <CardImage src={news.image} alt={news.alt} />

      <div className="flex flex-col gap-2">
        <Typography variant="heading-3" size="heading-sm">
          {news.title}
        </Typography>
        <Typography variant="p" size="content-base-secondary">
          {news.detail}
        </Typography>
      </div>
    </div>
  )
}
