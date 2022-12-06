import ButtonDemo from './components/button'
import MenuDemo from './components/menu'
import InputDemo from './components/input'
import ModalDemo from './components/modal'
import IconsDemo from './components/icons'

import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import * as MenuModule from '../components/menu'
import { RenderToReact } from '../shared/render'
import { SingleFileModule } from 'tarat-renderer'

const Menu = RenderToReact<MenuModule.MenuProps>({
  ...MenuModule
} as unknown as SingleFileModule)

const componentsPlayground = {
  all: {
    Button: ButtonDemo,
    Menu: MenuDemo,
    Input: InputDemo,
    Modal: ModalDemo,
    Icons: IconsDemo
  }
}

const searchParams = new URLSearchParams(location.search)

const TAB_KEY = 'tab'

const DEFAULT_TAB = 'Button'

function Home() {
  const [tab, setTab] = React.useState(searchParams.get(TAB_KEY) || DEFAULT_TAB)

  React.createElement

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

  const leftMenu = null
    ? null
    : Menu({
        items: sideMenu,
        onClick(item) {
          console.log('item: ', item)
          setTab(item.key)
        }
      })

  return (
    <div className="flex">
      <div style={{ width: '160px' }}>{leftMenu}</div>
      <div className="flex">
        <div className="p-4">
          <ComponentPreview />
        </div>
      </div>
    </div>
  )
}

const RRoot = createRoot(document.getElementById('root'))
RRoot.render(<Home />)
