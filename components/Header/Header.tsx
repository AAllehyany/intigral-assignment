import Container from '../Container'
import Tag from '../Tag'
import HeaderNav from './HeaderNav'
import AppLogo from '../AppLogo'

export default function Header() {
  return (
    <Container>
      <div className="mt-10 w-full flex items-center justify-between py-2 h-14">
        <div className="flex items-center gap-3 h-full">
          <AppLogo />
          <Tag size="small" type="transparent" shape="full">
            Demo
          </Tag>
        </div>

        <HeaderNav />
      </div>
    </Container>
  )
}
