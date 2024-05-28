import Image from 'next/image'

export default function HeroThumbnail({ image }: Readonly<{ image: string }>) {
  return (
    <div className="w-full h-[790px] overflow-clip z-[-1] absolute inset-0">
      <Image
        src={image}
        width={1920}
        height={1080}
        alt=""
        className="w-full h-[790px] object-cover"
      />
      <div className="absolute h-[790px] w-full inset-0 z-1 bg-gradient-hero"></div>
    </div>
  )
}
