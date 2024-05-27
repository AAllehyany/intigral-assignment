import { VariantProps, cva } from 'class-variance-authority'
import Link from 'next/link'
import { ReactNode } from 'react'

const callToAction = cva('inline-flex items-center gap-2.5 h-12 px-8', {
  variants: {
    type: {
      normal: [
        'bg-ott-red-1',
        'hover:bg-ott-red-2',
        'font-montserrat',
        'text-lg',
        'text-white',
        'font-semibold',
        'rounded-md',
      ],
      outline: [
        'bg-white/10',
        'hover:bg-white/20',
        'font-montserrat',
        'text-lg',
        'text-white',
        'font-semibold',
        'rounded-md',
      ],
    },
  },
})

type CallToActionProps = React.HtmlHTMLAttributes<'a'> &
  VariantProps<typeof callToAction> & {
    icon?: ReactNode
    children: ReactNode
    target: string
  }

export default function CallToAction({
  type,
  icon,
  children,
  target,
}: Readonly<CallToActionProps>) {
  const IconComponent = icon
  return (
    <Link href={target} className={callToAction({ type })}>
      {icon}
      {children}
    </Link>
  )
}
