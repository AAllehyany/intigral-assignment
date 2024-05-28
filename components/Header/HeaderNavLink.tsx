import Link from 'next/link'

type HeaderNavProps = {
  target: string
  title: string
}

export default function HeaderNavLink({
  target,
  title,
}: Readonly<HeaderNavProps>) {
  return (
    <Link href={target} className="font-open text-lg text-white">
      {title}
    </Link>
  )
}
