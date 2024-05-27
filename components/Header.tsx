import Image from 'next/image'
import Container from './Container'
import Tag from './Tag'
import HeaderNav from './HeaderNav'

export default function Header() {
  return (
    <Container>
      <div className="mt-10 w-full flex items-center justify-between py-2 h-14">
        <div className="flex items-center gap-3 h-full">
          <Image
            src="/ott-app-logo.svg"
            width={232.88}
            height={93.5}
            alt="OTT App Logo"
            className="w-auto object-fit h-full"
          />
          <Tag size="small" type="transparent" shape="full">
            Demo
          </Tag>
        </div>

        <HeaderNav />
      </div>
    </Container>
  )
}
