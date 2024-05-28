import * as Tabs from '@radix-ui/react-tabs'
import Container from '../Container'
import TabButton from './TabButton'

type TabProps = {
  value: string
  label: string
}

type TabsBlockProps = {
  tabs: TabProps[]
  children: React.ReactNode[]
}

export default function TabsBlock({
  tabs,
  children,
}: Readonly<TabsBlockProps>) {
  return (
    <Tabs.Root className="w-full flex flex-col gap-12 mt-28">
      <Tabs.List
        className="shrink-0 items-center border-b border-white/20"
        defaultValue="related"
      >
        <Container>
          <div className="flex items-center gap-12">
            {tabs.map((tab) => (
              <TabButton value={tab.value} key={tab.value}>
                {tab.label}
              </TabButton>
            ))}
          </div>
        </Container>
      </Tabs.List>

      {children.map((tabContent, idx) => (
        <Tabs.Content value={tabs[idx].value} key={tabs[idx].value}>
          {tabContent}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
