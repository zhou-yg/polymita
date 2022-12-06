import { createRenderer, SingleFileModule } from 'tarat-renderer'
import React from 'react'

export function RenderToReactWithWrap<T = any>(module: SingleFileModule) {
  const render = RenderToReact(module)

  return (p: T) => {
    return React.createElement(
      'div',
      { style: { margin: '20px', display: 'inline-block' } },
      render(p)
    )
  }
}

export function RenderToReact<T>(module: SingleFileModule) {
  const renderer = createRenderer(module, {
    framework: {
      name: 'react',
      lib: React
    }
  })

  return (p: T) => {
    renderer.construct(p)
    return renderer.render()
  }
}

export function RenderToVue<T = any>(module: SingleFileModule) {}
