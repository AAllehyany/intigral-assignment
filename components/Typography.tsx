import { VariantProps, cva } from 'class-variance-authority'

type TypographyLevel = 'heading-1' | 'heading-2' | 'heading-3' | 'p' | 'span'

const typographyLevelMap: Record<TypographyLevel, string> = {
  'heading-1': 'h1',
  'heading-2': 'h2',
  'heading-3': 'h3',

  p: 'p',
  span: 'span',
}

const typography = cva('', {
  variants: {
    size: {
      'heading-lg': [
        'font-open',
        'text-[54px]',
        'leading-tight',
        'font-bold',
        'text-white',
      ],

      'heading-sm': [
        'font-montserrat',
        'text-sm',
        'font-semibold',
        'leading-tight',
        'text-white',
      ],

      'body-base': ['font-open', 'text-xl', 'text-white', 'leading-relaxed'],
      'body-xs': [
        'font-bold',
        'font-montserrat',
        'text-xs',
        'text-white',
        'leading-tight',
      ],

      'content-base': [
        'font-montserrat',
        'text-sm',
        'text-white',
        'leading-relaxed',
      ],

      'content-base-secondary': [
        'font-montserrat',
        'text-sm',
        'text-white/60',
        'leading-relaxed',
      ],

      'content-sm': [
        'font-montserrat',
        'text-sm',
        'text-white',
        'font-semibold',
        'leading-tight',
      ],
    },
  },
})

type TypographyProps = React.HtmlHTMLAttributes<{}> &
  VariantProps<typeof typography> & {
    variant: TypographyLevel
    children: React.ReactNode
  }

export default function Typography({
  variant,
  size,
  children,
}: Readonly<TypographyProps>) {
  const Component = typographyLevelMap[variant] ?? 'p'

  return <Component className={typography({ size })}>{children}</Component>
}
