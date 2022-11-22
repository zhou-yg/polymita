import Button from './components/button'
import Menu from './components/menu'
import React from 'react'
import { createRoot } from 'react-dom/client'

const componentsPlayground = {
  all: {
    Button,
    Menu,
  }
}

function Home() {

  const node = Object.entries(componentsPlayground).map(([groupName, group]) => {
    return (
      <div key={groupName} className="flex" >
        <h2 className="group-name m-2 p-2">{groupName}</h2>
        <div className="flex-1">
          {Object.entries(group).map(([componentName, ComponentPreview]) => {
            return (
              <div key={componentName}>
                <h3 className="component-name">{componentName}</h3>
                <div className="component-mdx">
                  <ComponentPreview />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  })

  return (
    <div>
      {node}
    </div>
  )
}

const RRoot =createRoot(document.getElementById('root'))
RRoot.render(<Home />)