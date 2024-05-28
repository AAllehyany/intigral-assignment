import Image from 'next/image'
import Rail from '../Rail/Rail'

type HeroSponsorsProp = {
  sponsors: string[]
}

function SponsorImage({ sponsor }: Readonly<{ sponsor: string }>) {
  return (
    <div className="w-[100px] h-[80px] p-4 shrink-0">
      <Image
        src={`/${sponsor}.png`}
        alt={sponsor}
        width={100}
        height={60}
        className="w-full object-fit"
      />
    </div>
  )
}

export default function HeroSponsorsSection({
  sponsors,
}: Readonly<HeroSponsorsProp>) {
  return (
    <div className="w-full max-w-[600px]">
      <Rail rows={5} controls="sm" shape="transparent">
        {sponsors.map((sponsor, idx) => (
          <SponsorImage sponsor={sponsor} key={idx} />
        ))}
      </Rail>
    </div>
  )
}
