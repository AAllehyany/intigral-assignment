import Image from 'next/image'
import Link from 'next/link'

export default function FooterSocialMedia() {
  return (
    <ul className="flex items-center gap-2 h-full p-0">
      <li className="size-6">
        <Link href="#">
          <Image src="/fb.svg" width={24} height={24} alt="facebook icon" />
        </Link>
      </li>
      <li className="size-6">
        <Link href="#">
          <Image src="/twitter.svg" width={24} height={24} alt="twitter icon" />
        </Link>
      </li>
      <li className="size-6">
        <Link href="#">
          <Image src="/linked.svg" width={24} height={24} alt="linkedin icon" />
        </Link>
      </li>
    </ul>
  )
}
