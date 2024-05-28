import AppLogo from '../AppLogo'
import Container from '../Container'
import Typography from '../Typography'
import FooterSocialMedia from './FooterSocialMedia'

export default function Footer() {
  const copyRightNotice = `© 2022, Application, may contain information not intended for minors`
  return (
    <div className="w-full bg-ott-blue-2 mt-12 py-3 bg-footer-bg bg-right bg-no-repeat">
      <Container>
        <div className="flex justify-between">
          <div className="h-6">
            <AppLogo />
          </div>

          <div className="">
            <Typography variant="p" size="content-base-secondary">
              {copyRightNotice}
            </Typography>
          </div>

          <FooterSocialMedia />
        </div>
      </Container>
    </div>
  )
}
