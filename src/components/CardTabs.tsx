import { Card, Tabs } from 'antd'
import type { TabsProps } from 'antd'
import { useMemo } from 'react'

import './CardTabs.css'

const CustomTabBar: TabsProps['renderTabBar'] = (props, DefaultTabBar) => {
  return (
    <>
      <DefaultTabBar {...props} className='custom-tab-bar-mobile lg:!hidden' />
      <DefaultTabBar {...props} className='!hidden custom-card-tab-bar lg:!block' />
    </>
  )
}

export default function CardTabs(props: TabsProps) {
  const tabItems = useMemo(() => {
    return props.items?.map((x) => ({
      ...x,
      children: <Card className='xl:!rounded-tl-none !border-t-0'>{x.children}</Card>
    }))
  }, [props.items])

  return <Tabs {...props} items={tabItems} renderTabBar={CustomTabBar} />
}
