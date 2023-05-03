import ButtonDemo from './components/button'
import MenuDemo from './components/menu'
import InputDemo from './components/input'
import ModalDemo from './components/modal'
import ModalTestDemo from './components/modal-test'
import IconsDemo from './components/icons'
import LoadingButtonDemo from './components/loading-button'
import CheckboxDemo from './components/checkbox'
import RadioDemo from './components/radio'
import RadioGroupDemo from './components/radio-group'
import SelectDemo from './components/select'
import SwitchDemo from './components/switch'
import ListDemo from './components/list'
import SchemaFormDemo from './components/schema-form'

import GetStarted from './docs/get-started'
import Overview from './docs/overview'

import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import * as MenuModule from '../components/menu'
import { RenderToReact } from '../shared/render'
import { NormalizeProps, SingleFileModule } from '@polymita/renderer'

// test for Button
// import Button from '../react/components/button'

const Menu = RenderToReact<NormalizeProps<MenuModule.MenuProps>>({
  ...MenuModule
} as unknown as SingleFileModule<any, any, any, any>)

const docsPlayground = [
  {
    name: 'Overview',
    component: Overview,
  },
  {
    name: 'Get Started',
    component: GetStarted,
  }
]

const componentsPlayground = {
  Button: ButtonDemo,
  LoadingButton: LoadingButtonDemo,
  Menu: MenuDemo,
  Input: InputDemo,
  Modal: ModalDemo,
  ModalTest: ModalTestDemo,
  Icons: IconsDemo,
  Checkbox: CheckboxDemo,
  Radio: RadioDemo,
  RadioGroup: RadioGroupDemo,
  Select: SelectDemo,
  Switch: SwitchDemo,
  List: ListDemo,
  SchemaForm: SchemaFormDemo,
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


  let componentName = ''
  let ComponentPreview = () => null

  const docSideItems = docsPlayground.map(({ name, component }) => {
    const current = name === tab
    if (current) {
      componentName = name
      ComponentPreview = component
    }
    return {
      label: name,
      key: name,
      selected: current
    }
  })

  const sideMenuItems =  Object.entries(componentsPlayground).map(([name, component]) => {
    const current = name === tab
    if (current) {
      componentName = name
      ComponentPreview = component
    }
    return {
      label: name,
      key: name,
      selected: current
    }
  })

  const docMenu = (
    <Menu
      items={docSideItems}
      onClick={(item) => {
        setTab(item.key)
      }}
      />
  )

  const leftMenu = (
    <Menu
      items={sideMenuItems}
      onClick={(item) => {
        setTab(item.key)
      }}
    />
  )

  return (
    <div className="flex">
      <div style={{ width: '220px' }} 
        className="border-r p-4 fixed top-0 left-0 h-full overflow-auto" >
        <h2 className="text-2xl font-bold pb-4 mb-4 border-b border-solid" >Polymita</h2>
        <p className="text-slate-400 mt-2" >Introduction</p>
        {docMenu}
        <p className="text-slate-400 mt-2" >Components</p>
        {leftMenu}
      </div>
      <div className="flex-1" style={{ marginLeft: '220px' }}>
        <div className="p-4 markdown-body">
          <ComponentPreview />
        </div>
      </div>
    </div>
  )
}

const RRoot = createRoot(document.getElementById('root'))
RRoot.render(<Home />)

