import { createRSRenderer, SingleFileModule } from '@polymita/renderer'
import React from 'react'

export function RenderToReactWithWrap<T = any>(
  module: SingleFileModule<any, any, any, any>
) {  
  const render = RenderToReact(module)
  return (p: T) => {
    return React.createElement(
      'div',
      { style: { margin: '20px', display: 'inline-block' } },
      render(p)
    )
  }
}

export function RenderToReact<T>(module: SingleFileModule<T, any, any, any>) {
  
  const renderer = createRSRenderer(module, {
    framework: {
      name: 'react',
      lib: React
    }
  })
  return (p: T) => {
    const r = renderer.construct(p)
    return renderer.render()
  }
}

export function RenderToVue<T = any>(module: SingleFileModule<any, any, any, any>) {}
