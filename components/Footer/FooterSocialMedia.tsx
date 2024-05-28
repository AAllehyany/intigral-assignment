import Image from 'next/image'

export default function FooterSocialMedia() {
  return (
    <ul className="flex items-center gap-2 h-full p-0">
      <li className="size-6">
        <Image src="/fb.svg" width={24} height={24} alt="facebook icon" />
      </li>
      <li className="size-6">
        <Image src="/twitter.svg" width={24} height={24} alt="twitter icon" />
      </li>
      <li className="size-6">
        <Image src="/linked.svg" width={24} height={24} alt="linkedin icon" />
      </li>
    </ul>
  )
}
