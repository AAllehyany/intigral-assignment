import { VariantProps, cva } from 'class-variance-authority'
import Image from 'next/image'

const avatar = cva('object-cover rounded-full', {
  variants: {
    size: {
      full: ['w-full', 'h-full'],
      small: ['size-10'],
    },
  },
})

type AvatarProps = React.HTMLAttributes<{}> &
  VariantProps<typeof avatar> & {
    width: number
    height: number
    alt: string
    src: string
  }

export default function Avatar({
  size,
  width,
  height,
  alt,
  src,
}: Readonly<AvatarProps>) {
  return (
    <Image
      src={src}
      alt={alt}
      height={height}
      width={width}
      className={avatar({ size })}
    />
  )
}
