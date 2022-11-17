import Button from './components/button'
import React from 'react'
import { createRoot } from 'react-dom/client'

const componentsPlayground = {
  all: {
    Button,
  }
}

function Home() {

  const node = Object.entries(componentsPlayground).map(([groupName, group]) => {
    return (
      <div key={groupName}>
        <h2>{groupName}</h2>
        <div>
          {Object.entries(group).map(([componentName, Component]) => {
            return (
              <div key={componentName}>
                <h3>{componentName}</h3>
                <div>
                  <Component />
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