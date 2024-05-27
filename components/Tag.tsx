import { VariantProps, cva } from 'class-variance-authority'

const tag = cva('inline-flex items-center gap-2 ', {
  variants: {
    type: {
      blue: ['bg-ott-blue-1', 'text-white'],
      red: ['bg-ott-red-1', 'text-white'],
      transparent: ['bg-white/10', 'text-white'],
      gradient: [
        'bg-gradient-to-r',
        'from-ott-green',
        'from-[90%]',
        'to-transparent',
      ],
    },
    size: {
      small: ['text-sm', 'font-semibold'],
    },
    shape: {
      default: ['h-7', 'px-4', 'py-0', 'rounded-sm font-montserrat'],
      full: ['px-4', 'py-1.5', 'rounded-full font-open'],
    },
  },
})

type TagProps = React.HTMLAttributes<{}> &
  VariantProps<typeof tag> & {
    icon?: React.ReactNode
    children: React.ReactNode
  }

export default function Tag({
  type,
  size,
  shape,
  icon,
  children,
}: Readonly<TagProps>) {
  return (
    <div className={tag({ type, size, shape })}>
      {icon}
      {children}
    </div>
  )
}
