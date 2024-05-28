import Link from 'next/link'
import Avatar from '../Avatar'
import HeaderNavLink from './HeaderNavLink'
import NotificationBadgeIcon from '../icons/NotificationBadgeIcon'
import SearchIcon from '../icons/SearchIcon'

export default function HeaderNav() {
  return (
    <nav role="primary" className="p-0">
      <ul className="flex gap-10 items-center p-0 m-0">
        <li>
          <HeaderNavLink target="#" title="Movies" />
        </li>
        <li>
          <HeaderNavLink target="#" title="TV Series" />
        </li>
        <li>
          <HeaderNavLink target="#" title="Documentaries" />
        </li>
        <li>
          <Link href="#">
            <SearchIcon />
          </Link>
        </li>
        <li>
          <button>
            <NotificationBadgeIcon />
          </button>
        </li>
        <li>
          <Avatar
            src="/avatar-img.png"
            size="small"
            alt="a man wearing a suite and looking sideways"
            width={150}
            height={150}
          />
        </li>
      </ul>
    </nav>
  )
}
