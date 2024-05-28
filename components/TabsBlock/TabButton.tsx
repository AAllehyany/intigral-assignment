import * as Tabs from '@radix-ui/react-tabs'

type TabButtonProps = {
  value: string
  children: React.ReactNode
}

export default function TabButton({
  value,
  children,
}: Readonly<TabButtonProps>) {
  return (
    <Tabs.Trigger
      value={value}
      className="font-open font-medium text-white/60 data-[state=active]:text-white text-xl h-16 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-ott-red-2"
    >
      {children}
    </Tabs.Trigger>
  )
}
