import Image from 'next/image'

export default function AppLogo() {
  return (
    <Image
      src="/ott-app-logo.svg"
      width={232.88}
      height={93.5}
      alt="OTT App Logo"
      className="w-auto object-fit h-full"
    />
  )
}
