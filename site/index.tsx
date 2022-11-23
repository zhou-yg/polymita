import ButtonDemo from './components/button'
import MenuDemo from './components/menu'
import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import * as MenuModule from '../components/menu/'
import { RenderToReact } from '../shared/render'
import { SingleFileModule } from 'tarat-renderer'

const Menu = RenderToReact<MenuModule.MenuProps>({
  ...MenuModule
} as unknown as SingleFileModule)

const componentsPlayground = {
  all: {
    Button: ButtonDemo,
    Menu: MenuDemo
  }
}

const searchParams = new URLSearchParams(location.search)

const TAB_KEY = 'tab'

const DEFAULT_TAB = 'Button'

function Home() {
  const [tab, setTab] = React.useState(searchParams.get(TAB_KEY) || DEFAULT_TAB)

  useEffect(() => {
    searchParams.set(TAB_KEY, tab)
    history.replaceState(
      null,
      '',
      `${location.pathname}?${searchParams.toString()}`
    )
  }, [tab])

  const sideMenu = Object.entries(componentsPlayground).map(
    ([groupName, components]) => {
      return {
        label: groupName,
        key: groupName,
        children: Object.entries(components).map(([name, component]) => {
          return {
            label: name,
            key: name,
            selected: tab === name
          }
        })
      }
    }
  )

  let componentName = ''
  let ComponentPreview = () => null

  Object.entries(componentsPlayground).map(([groupName, group]) => {
    Object.entries(group).forEach(([name, component]) => {
      if (name === tab) {
        componentName = name
        ComponentPreview = component
      }
    })
  })

  return (
    <div className="flex">
      <div style={{ width: '160px' }}>
        {Menu({
          items: sideMenu,
          onClick(item) {
            setTab(item.key)
          }
        })}
      </div>
      <div className="flex">
        <div className="p-4">
          <h3 className="component-name">{componentName}</h3>
          <div className="component-mdx">
            <ComponentPreview />
          </div>
        </div>
      </div>
    </div>
  )
}

const RRoot = createRoot(document.getElementById('root'))
RRoot.render(<Home />)
